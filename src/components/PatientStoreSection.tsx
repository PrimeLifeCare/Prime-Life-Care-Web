'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useAuth } from '@/context/AuthContext';
import { initialMedicalItems } from '@/data/medicalItems';
import { districtList } from '@/data/services';
import { MedicalItem, EquipmentOrder } from '@/types';
import { ShoppingBag, Truck, CreditCard, ShieldCheck, CheckCircle2, X, ArrowRight, Building, Smartphone, Banknote } from 'lucide-react';

interface PatientStoreSectionProps {
  onOrderPlaced: (order: EquipmentOrder) => void;
  onOpenProfile: () => void;
}

export const PatientStoreSection: React.FC<PatientStoreSectionProps> = ({
  onOrderPlaced,
  onOpenProfile
}) => {
  const { language } = useLanguage();
  const { user, openAuthModal } = useAuth();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItemForOrder, setSelectedItemForOrder] = useState<MedicalItem | null>(null);

  // Order modal state
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderType, setOrderType] = useState<'buy' | 'rent'>('buy');
  const [quantity, setQuantity] = useState<number>(1);
  const [deliveryAddress, setDeliveryAddress] = useState(user?.address || '');
  const [district, setDistrict] = useState(districtList[0]);
  const [contactName, setContactName] = useState(user?.name || '');
  const [contactPhone, setContactPhone] = useState(user?.phone || '');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'bank_transfer' | 'online_card'>('cod');
  const [orderSuccess, setOrderSuccess] = useState<EquipmentOrder | null>(null);

  const labels = {
    si: {
      badge: 'රෝගී සත්කාරක උපකරණ සහ ද්‍රව්‍ය',
      heading: 'වැඩිහිටි සහ රෝගී සත්කාරයට අවශ්‍ය උපකරණ නිවසටම ගෙන්වා ගන්න',
      subheading: 'රෝහල් ඇඳන්, එයාර් මෙට්ට, රෝද පුටු සහ ඩයපර් පැකට් ඇතුළු සියලුම ද්‍රව්‍ය දිවයින පුරා බෙදාහැරීම.',
      filterAll: 'සියලුම භාණ්ඩ',
      filterEquipment: 'ඇඳන් සහ මෙට්ට',
      filterMobility: 'රෝද පුටු & Walker',
      filterHygiene: 'ඩයපර් සහ සනීපාරක්ෂාව',
      filterMonitoring: 'පීඩන මාපක (BP Monitor)',
      buyBtn: 'ඇණවුම් කරන්න',
      rentBtn: 'කුලියට (Rent)',
      stockIn: 'තොග ඇත',
      pricePrefix: 'රු.',
      modalTitle: 'භාණ්ඩ ඇණවුම් කිරීම',
      modalSubtitle: 'Cash on Delivery, Bank Transfer හෝ Online Card මඟින් ගෙවීමේ පහසුකම.',
      deliveryDetails: 'බෙදාහැරීමේ විස්තර',
      paymentMethodLabel: 'ගෙවීම් ක්‍රමය තෝරන්න',
      cod: 'Cash on Delivery (භාණ්ඩය ලැබුණු පසු මුදල් ගෙවීම)',
      bank: 'Bank Transfer (බැංකු ගිණුමට තැන්පත් කිරීම)',
      card: 'Online Card Payment (Visa / Mastercard)',
      confirmBtn: 'ඇණවුම තහවුරු කරන්න',
      successTitle: 'ඇණවුම සාර්ථකව ලැබිණි!',
      successSub: 'ඔබේ ඇණවුම් අංකය:',
      viewInProfile: 'මගේ ඇණවුම් පරීක්ෂා කරන්න'
    },
    en: {
      badge: 'Medical Equipment & Essentials Store',
      heading: 'Home Medical Supplies & Geriatric Patient Equipment',
      subheading: 'Direct doorstep delivery of hospital beds, anti-bedsore mattresses, wheelchairs, and adult diapers across Sri Lanka.',
      filterAll: 'All Products',
      filterEquipment: 'Beds & Mattresses',
      filterMobility: 'Wheelchairs & Walkers',
      filterHygiene: 'Diapers & Hygiene',
      filterMonitoring: 'Vitals & Monitors',
      buyBtn: 'Order to Buy',
      rentBtn: 'Rent Monthly',
      stockIn: 'In Stock',
      pricePrefix: 'LKR',
      modalTitle: 'Purchase Medical Supplies',
      modalSubtitle: 'Flexible payment options: Cash on Delivery, Bank Transfer, or Online Cards.',
      deliveryDetails: 'Delivery Details',
      paymentMethodLabel: 'Choose Payment Method',
      cod: 'Cash on Delivery (Pay upon arrival)',
      bank: 'Bank Transfer (Direct Commercial Bank deposit)',
      card: 'Online Card Payment (Visa / MasterCard)',
      confirmBtn: 'Confirm & Place Order',
      successTitle: 'Order Placed Successfully!',
      successSub: 'Your Order Reference:',
      viewInProfile: 'View in My Profile'
    },
    ta: {
      badge: 'மருத்துவ உபகரணங்கள் கடை',
      heading: 'நோயாளிகளுக்கான அத்தியாவசிய உபகரணங்கள் மற்றும் பொருட்கள்',
      subheading: 'மருத்துவமனை படுக்கைகள், சக்கர நாற்காலிகள், மற்றும் டயப்பர்கள் நாடு தழுவிய விநியோகம்.',
      filterAll: 'அனைத்து பொருட்கள்',
      filterEquipment: 'படுக்கைகள் & மெத்தைகள்',
      filterMobility: 'சக்கர நாற்காலிகள்',
      filterHygiene: 'டயப்பர்கள் & சுகாதாரம்',
      filterMonitoring: 'மானிட்டர்கள்',
      buyBtn: 'ஆர்டர் செய்',
      rentBtn: 'மாதாந்திர வாடகை',
      stockIn: 'கையிருப்பில் உள்ளது',
      pricePrefix: 'ரூ.',
      modalTitle: 'பொருட்களை ஆர்டர் செய்க',
      modalSubtitle: 'டெலிவரி போது பணம், வங்கி பரிமாற்றம் அல்லது ஆன்லைன் கார்டு செலுத்துதல்.',
      deliveryDetails: 'டெலிவரி விவரங்கள்',
      paymentMethodLabel: 'கட்டண முறையை தேர்வு செய்க',
      cod: 'Cash on Delivery (டெலிவரியின் போது பணம்)',
      bank: 'Bank Transfer (வங்கி பரிமாற்றம்)',
      card: 'Online Card Payment (அட்டை மூலம்)',
      confirmBtn: 'ஆர்டரை உறுதி செய்க',
      successTitle: 'ஆர்டர் பெறப்பட்டது!',
      successSub: 'உங்கள் ஆர்டர் எண்:',
      viewInProfile: 'சுயவிவரத்தில் பார்க்க'
    }
  }[language];

  const filteredItems = initialMedicalItems.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const handleOpenOrder = (item: MedicalItem, type: 'buy' | 'rent' = 'buy') => {
    if (!user) {
      openAuthModal(() => {
        setSelectedItemForOrder(item);
        setOrderType(type);
        setDeliveryAddress('');
        setContactName('');
        setContactPhone('');
        setIsOrderModalOpen(true);
      });
      return;
    }
    setSelectedItemForOrder(item);
    setOrderType(type);
    setDeliveryAddress(user.address || '');
    setContactName(user.name);
    setContactPhone(user.phone);
    setIsOrderModalOpen(true);
  };

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedItemForOrder || !user) return;

    const unitPrice = orderType === 'rent' && selectedItemForOrder.rentalMonthlyLKR
      ? selectedItemForOrder.rentalMonthlyLKR
      : selectedItemForOrder.priceLKR;

    const total = unitPrice * quantity;
    const code = `ORD-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    const newOrder: EquipmentOrder = {
      id: `ord_${Date.now()}`,
      orderCode: code,
      userId: user.id,
      items: [
        {
          itemId: selectedItemForOrder.id,
          name: `${selectedItemForOrder.name[language]} (${orderType === 'rent' ? 'Monthly Rental' : 'Purchase'})`,
          quantity,
          priceLKR: unitPrice
        }
      ],
      totalAmountLKR: total,
      paymentMethod,
      deliveryAddress: deliveryAddress || 'Colombo District Delivery',
      district,
      contactName: contactName || user.name,
      contactPhone: contactPhone || user.phone,
      status: 'order_received',
      createdAt: new Date().toISOString()
    };

    setOrderSuccess(newOrder);
    onOrderPlaced(newOrder);
  };

  const closeOrderModal = () => {
    setIsOrderModalOpen(false);
    setSelectedItemForOrder(null);
    setOrderSuccess(null);
    setQuantity(1);
  };

  return (
    <section id="patient-store" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner with Showroom Photo */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white mb-14 shadow-xl overflow-hidden relative">
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
                {labels.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                {labels.heading}
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100 max-w-xl leading-relaxed">
                {labels.subheading}
              </p>

              {/* Delivery Perks */}
              <div className="grid grid-cols-3 gap-3 pt-2 text-[11px] sm:text-xs">
                <div className="flex items-center gap-1.5 text-emerald-200">
                  <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Doorstep Delivery</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-200">
                  <CreditCard className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Cash / Card / Bank</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Quality Guarantee</span>
                </div>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 aspect-4/3 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/medical_store.jpg"
                  alt="Modern medical equipment showroom hospital bed wheelchair walker"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold text-white">
                  Prime Medical Supplies Division
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {labels.filterAll}
          </button>
          <button
            onClick={() => setSelectedCategory('equipment')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              selectedCategory === 'equipment'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {labels.filterEquipment}
          </button>
          <button
            onClick={() => setSelectedCategory('mobility')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              selectedCategory === 'mobility'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {labels.filterMobility}
          </button>
          <button
            onClick={() => setSelectedCategory('hygiene')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              selectedCategory === 'hygiene'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {labels.filterHygiene}
          </button>
          <button
            onClick={() => setSelectedCategory('monitoring')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              selectedCategory === 'monitoring'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {labels.filterMonitoring}
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-5 border border-slate-200 hover:border-emerald-400 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-100">
                    {item.badge || labels.stockIn}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {labels.stockIn}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 leading-snug">
                  {item.name[language]}
                </h3>

                <p className="text-xs text-slate-500 mb-4 line-clamp-2">
                  {item.description[language]}
                </p>
              </div>

              <div>
                <div className="pt-3 border-t border-slate-100 mb-4">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Purchase Price</span>
                  <p className="text-lg font-black text-slate-900">
                    {labels.pricePrefix} {item.priceLKR.toLocaleString()}
                  </p>

                  {item.rentalMonthlyLKR && (
                    <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                      Or Rent: {labels.pricePrefix} {item.rentalMonthlyLKR.toLocaleString()} / mo
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenOrder(item, 'buy')}
                    className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>{labels.buyBtn}</span>
                  </button>

                  {item.rentalMonthlyLKR && (
                    <button
                      onClick={() => handleOpenOrder(item, 'rent')}
                      className="px-3 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-all"
                    >
                      {labels.rentBtn}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order & Checkout Modal */}
      {isOrderModalOpen && selectedItemForOrder && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-100 overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-800 to-teal-800 text-white p-6 relative">
              <button
                onClick={closeOrderModal}
                className="absolute top-5 right-5 text-emerald-200 hover:text-white p-1 rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-xl font-black">{labels.modalTitle}</h3>
              <p className="text-xs text-emerald-100 mt-1">{labels.modalSubtitle}</p>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {!orderSuccess ? (
                <form onSubmit={handleConfirmOrder} className="space-y-4">
                  {/* Selected Item Summary */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{selectedItemForOrder.name[language]}</h4>
                      <p className="text-xs text-slate-500">
                        {orderType === 'rent' ? 'Monthly Rental' : 'Standard Purchase'}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-black text-emerald-700 text-base">
                        LKR {(orderType === 'rent' && selectedItemForOrder.rentalMonthlyLKR ? selectedItemForOrder.rentalMonthlyLKR : selectedItemForOrder.priceLKR).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-700 uppercase">Quantity</label>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 rounded-lg border border-slate-200 text-slate-700 font-bold"
                      >
                        -
                      </button>
                      <span className="font-bold text-sm px-2">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 rounded-lg border border-slate-200 text-slate-700 font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Delivery Info */}
                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">{labels.deliveryDetails}</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">Contact Name *</label>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-emerald-600"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-emerald-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">District *</label>
                      <select
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-emerald-600 bg-white"
                      >
                        {districtList.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">Delivery Address *</label>
                      <textarea
                        rows={2}
                        required
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        placeholder="House address, street, landmarks"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-emerald-600"
                      />
                    </div>
                  </div>

                  {/* Payment Method Selector */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                      {labels.paymentMethodLabel}
                    </label>

                    <div className="space-y-2">
                      <label className={`p-3 rounded-xl border-2 flex items-center gap-3 cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-emerald-600 bg-emerald-50/50' : 'border-slate-200'}`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          checked={paymentMethod === 'cod'}
                          onChange={() => setPaymentMethod('cod')}
                          className="text-emerald-600"
                        />
                        <Banknote className="w-5 h-5 text-emerald-700" />
                        <span className="text-xs font-semibold text-slate-800">{labels.cod}</span>
                      </label>

                      <label className={`p-3 rounded-xl border-2 flex items-center gap-3 cursor-pointer transition-all ${paymentMethod === 'bank_transfer' ? 'border-emerald-600 bg-emerald-50/50' : 'border-slate-200'}`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          checked={paymentMethod === 'bank_transfer'}
                          onChange={() => setPaymentMethod('bank_transfer')}
                          className="text-emerald-600"
                        />
                        <Building className="w-5 h-5 text-teal-700" />
                        <div className="text-xs">
                          <span className="font-semibold text-slate-800 block">{labels.bank}</span>
                          <span className="text-[10px] text-slate-500">Commercial Bank A/C: 1000293849 (Prime Life Care)</span>
                        </div>
                      </label>

                      <label className={`p-3 rounded-xl border-2 flex items-center gap-3 cursor-pointer transition-all ${paymentMethod === 'online_card' ? 'border-emerald-600 bg-emerald-50/50' : 'border-slate-200'}`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          checked={paymentMethod === 'online_card'}
                          onChange={() => setPaymentMethod('online_card')}
                          className="text-emerald-600"
                        />
                        <CreditCard className="w-5 h-5 text-indigo-700" />
                        <span className="text-xs font-semibold text-slate-800">{labels.card}</span>
                      </label>
                    </div>
                  </div>

                  {/* Total and Submit */}
                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Total Payable</span>
                      <p className="text-xl font-black text-slate-900">
                        LKR {((orderType === 'rent' && selectedItemForOrder.rentalMonthlyLKR ? selectedItemForOrder.rentalMonthlyLKR : selectedItemForOrder.priceLKR) * quantity).toLocaleString()}
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-200 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                    >
                      <span>{labels.confirmBtn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              ) : (
                /* Success View */
                <div className="text-center py-4 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900">{labels.successTitle}</h4>
                  <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 max-w-sm mx-auto">
                    <span className="text-xs text-slate-500">{labels.successSub}</span>
                    <p className="text-2xl font-black text-emerald-800 mt-0.5">{orderSuccess.orderCode}</p>
                    <p className="text-xs text-slate-600 mt-2">
                      Total: LKR {orderSuccess.totalAmountLKR.toLocaleString()} • Payment: {orderSuccess.paymentMethod.toUpperCase()}
                    </p>
                  </div>

                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Our dispatch team has scheduled the delivery to {orderSuccess.deliveryAddress}. We will call before arrival.
                  </p>

                  <div className="flex justify-center gap-3 pt-2">
                    <button
                      onClick={() => {
                        closeOrderModal();
                        onOpenProfile();
                      }}
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-xs"
                    >
                      {labels.viewInProfile}
                    </button>
                    <button
                      onClick={closeOrderModal}
                      className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
