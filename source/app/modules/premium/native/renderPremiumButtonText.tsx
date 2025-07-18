// app/modules/premium/native/renderPremiumButtonText.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PREMIUM_YEARLY_DISCOUNT_PERCENT;
    var _closure1_slot4 = var7;
    var4 = var4.SubscriptionIntervalTypes;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var7 = var8.create;
    var4 = {};
    var9 = {'borderWidth': 1, 'borderColor': null, 'borderRadius': 2, 'marginLeft': 4, 'paddingHorizontal': 2};
    var10 = 4;
    var10 = var6[var10];
    var13 = var5.bind(var1)(var10);
    var12 = var13.hexWithOpacity;
    var10 = 5;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var11 = var10.WHITE_500;
    var10 = 0.3;
    var10 = var12.bind(var13)(var11, var10);
    var9['borderColor'] = var10;
    var4['discount'] = var9;
    var9 = {};
    var10 = 'row';
    var9['flexDirection'] = var10;
    var4['premiumText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/renderPremiumButtonText.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function renderPremiumText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var14 = var1.style;
            var15 = var1.isCurrentPlan;
            var2 = var1.isGift;
            var5 = var1.basePlanId;
            var20 = var1.product;
            var9 = var1.text;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 6;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.getInterval;
            var1 = var1.bind(var3)(var5);
            var3 = var1.intervalType;
            var1 = _closure1_slot5;
            var1 = var1.YEAR;
            var6 = null;
            var12 = null;
            if(!(var3 === var1)) { _fun0001_ip = 133; continue _fun0001 }
 97:
            var12 = null;
            if(var15) { _fun0001_ip = 133; continue _fun0001 }
 102:
            var8 = _closure1_slot4;
            var1 = global;
            var1 = var1.HermesInternal;
            var7 = var1.concat;
            var5 = '-';
            var1 = '%';
            var12 = var7.bind(var5)(var8, var1);
 133:
            if(!(var6 == var9)) { _fun0001_ip = 447; continue _fun0001 }
 140:
            var5 = var6 == var20;
            var1 = undefined;
            if(var5) { _fun0001_ip = 155; continue _fun0001 }
 149:
            var1 = var20.priceString;
 155:
            var5 = var6 != var1;
            var11 = '$...';
            if(!var5) { _fun0001_ip = 171; continue _fun0001 }
 168:
            var11 = var1;
 171:
            var1 = _closure1_slot5;
            var1 = var1.MONTH;
            if(!(var3 !== var1)) { _fun0001_ip = 317; continue _fun0001 }
 188:
            var5 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 7;
            var1 = var13[var3];
            var1 = var5.bind(var4)(var1);
            var8 = var1.intl;
            var7 = var8.formatToPlainString;
            if(var2) { _fun0001_ip = 277; continue _fun0001 }
 221:
            var16 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var1 = var16.bind(var4)(var1);
            var1 = var1.t;
            if(var15) { _fun0001_ip = 254; continue _fun0001 }
 246:
            var16 = var1.rS8FAw;
            _fun0001_ip = 262; continue _fun0001;
 254:
            var16 = var1.dFbQCQ;
 262:
            var1 = {};
            var1['price'] = var11;
            var1 = var7.bind(var8)(var16, var1);
            _fun0001_ip = 312; continue _fun0001;
 277:
            var3 = var13[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.t;
            var5 = var3.rm53bW;
            var3 = {};
            var3['price'] = var11;
            var1 = var7.bind(var8)(var5, var3);
 312:
            _fun0001_ip = 444; continue _fun0001;
 317:
            var5 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 7;
            var7 = var13[var3];
            var7 = var5.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            if(var2) { _fun0001_ip = 406; continue _fun0001 }
 350:
            var16 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var3];
            var2 = var16.bind(var4)(var2);
            var2 = var2.t;
            if(var15) { _fun0001_ip = 383; continue _fun0001 }
 375:
            var15 = var2.AbOLNj;
            _fun0001_ip = 391; continue _fun0001;
 383:
            var15 = var2.V6iX4+;
 391:
            var2 = {};
            var2['price'] = var11;
            var2 = var7.bind(var8)(var15, var2);
            _fun0001_ip = 441; continue _fun0001;
 406:
            var3 = var13[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.t;
            var5 = var3.FIjgMj;
            var3 = {};
            var3['price'] = var11;
            var2 = var7.bind(var8)(var5, var3);
 441:
            var1 = var2;
 444:
            var9 = var1;
 447:
            var3 = _closure1_slot7;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = _closure1_slot8;
            var5 = var5.premiumText;
            var1['style'] = var5;
            var8 = _closure1_slot6;
            var7 = _closure1_slot1;
            var19 = _closure1_slot2;
            var15 = 8;
            var5 = var19[var15];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var5['style'] = var14;
            var13 = 1;
            var5['numberOfLines'] = var13;
            var16 = _closure1_slot0;
            var11 = 7;
            var17 = var19[var11];
            var17 = var16.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.formatToPlainString;
            var11 = var19[var11];
            var11 = var16.bind(var4)(var11);
            var11 = var11.t;
            var16 = var11.E0lS2t;
            var11 = {};
            var21 = var6 == var20;
            var19 = undefined;
            if(var21) { _fun0001_ip = 573; continue _fun0001 }
 568:
            var19 = var20.title;
 573:
            var11['product'] = var19;
            var11['description'] = var9;
            var11 = var17.bind(var18)(var16, var11);
            var5['accessibilityLabel'] = var11;
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var7 = var6 != var12;
            var6 = null;
            if(!var7) { _fun0001_ip = 691; continue _fun0001 }
 619:
            var9 = _closure1_slot6;
            var8 = _closure1_slot3;
            var7 = {};
            var11 = _closure1_slot8;
            var11 = var11.discount;
            var7['style'] = var11;
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var10 = var10[var15];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['style'] = var14;
            var10['numberOfLines'] = var13;
            var10['children'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 691:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();