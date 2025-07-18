// app/modules/interaction_components/validateComponent.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/validateComponent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function validateComponent(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 63; continue _fun0001 }
 12:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 2;
            var4 = var6[var4];
            var7 = undefined;
            var6 = var5.bind(var7)(var4);
            var5 = var3.type;
            var4 = var2.type;
            var5 = var5 === var4;
            var4 = 'component type matches state';
            var4 = var6.bind(var7)(var5, var4);
 63:
            var6 = var2.type;
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var7 = 1;
            var5 = var5[var7];
            var9 = undefined;
            var5 = var8.bind(var9)(var5);
            var5 = var5.ComponentType;
            var5 = var5.BUTTON;
            if(!(var5 !== var6)) { _fun0001_ip = 1039; continue _fun0001 }
 112:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var8.bind(var9)(var5);
            var5 = var5.ComponentType;
            var5 = var5.STRING_SELECT;
            if(!(var5 !== var6)) { _fun0001_ip = 572; continue _fun0001 }
 148:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var8.bind(var9)(var5);
            var5 = var5.ComponentType;
            var5 = var5.USER_SELECT;
            if(!(var5 !== var6)) { _fun0001_ip = 572; continue _fun0001 }
 184:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var8.bind(var9)(var5);
            var5 = var5.ComponentType;
            var5 = var5.ROLE_SELECT;
            if(!(var5 !== var6)) { _fun0001_ip = 572; continue _fun0001 }
 220:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var8.bind(var9)(var5);
            var5 = var5.ComponentType;
            var5 = var5.MENTIONABLE_SELECT;
            if(!(var5 !== var6)) { _fun0001_ip = 572; continue _fun0001 }
 256:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var8.bind(var9)(var5);
            var5 = var5.ComponentType;
            var5 = var5.CHANNEL_SELECT;
            if(!(var5 !== var6)) { _fun0001_ip = 572; continue _fun0001 }
 292:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var8.bind(var9)(var5);
            var5 = var5.ComponentType;
            var5 = var5.TEXT_INPUT;
            if(!(var5 !== var6)) { _fun0001_ip = 361; continue _fun0001 }
 325:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 2;
            var5 = var8[var5];
            var8 = var6.bind(var9)(var5);
            var6 = false;
            var5 = 'missing validator for this component';
            var5 = var8.bind(var9)(var6, var5);
            return var9;
 361:
            var14 = var2.minLength;
            var13 = var2.maxLength;
            var8 = var2.required;
            if(!(var1 != var3)) { _fun0001_ip = 497; continue _fun0001 }
 383:
            var5 = var3.value;
            var5 = var5.length;
            var15 = 0;
            if(!(var15 !== var5)) { _fun0001_ip = 497; continue _fun0001 }
 399:
            var5 = var3.value;
            var5 = var5.length;
            if(!(!(var5 < var14))) { _fun0001_ip = 432; continue _fun0001 }
 413:
            var5 = var3.value;
            var5 = var5.length;
            var6 = var5 > var13;
            var5 = null;
            if(!var6) { _fun0001_ip = 495; continue _fun0001 }
 432:
            var10 = _closure1_slot0;
            var6 = _closure1_slot2;
            var11 = var6[var15];
            var11 = var10.bind(var9)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var6 = var6[var15];
            var6 = var10.bind(var9)(var6);
            var6 = var6.t;
            var10 = var6.ONSqYW;
            var6 = {};
            var6['min'] = var14;
            var6['max'] = var13;
            var5 = var11.bind(var12)(var10, var6);
 495:
            _fun0001_ip = 570; continue _fun0001;
 497:
            var6 = null;
            if(!var8) { _fun0001_ip = 567; continue _fun0001 }
 502:
            var10 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = 0;
            var11 = var15[var8];
            var11 = var10.bind(var9)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var8 = var15[var8];
            var8 = var10.bind(var9)(var8);
            var8 = var8.t;
            var10 = var8.ONSqYW;
            var8 = {};
            var8['min'] = var14;
            var8['max'] = var13;
            var6 = var11.bind(var12)(var10, var8);
 567:
            var5 = var6;
 570:
            return var5;
 572:
            var8 = var2.minValues;
            var10 = var2.maxValues;
            if(!(var1 != var3)) { _fun0001_ip = 967; continue _fun0001 }
 591:
            var5 = var3.type;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var6.bind(var9)(var2);
            var2 = var2.ComponentType;
            var2 = var2.STRING_SELECT;
            if(!(var5 !== var2)) { _fun0001_ip = 802; continue _fun0001 }
 632:
            var2 = var3.selectedOptions;
            var2 = var2.length;
            if(!(!(var2 < var8))) { _fun0001_ip = 736; continue _fun0001 }
 647:
            var2 = var3.selectedOptions;
            var2 = var2.length;
            var5 = var2 > var10;
            var2 = null;
            if(!var5) { _fun0001_ip = 1037; continue _fun0001 }
 670:
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 0;
            var7 = var12[var5];
            var7 = var6.bind(var9)(var7);
            var11 = var7.intl;
            var7 = var11.formatToPlainString;
            var5 = var12[var5];
            var5 = var6.bind(var9)(var5);
            var5 = var5.t;
            var6 = var5.LDvfRE;
            var5 = {};
            var5['count'] = var10;
            var2 = var7.bind(var11)(var6, var5);
            _fun0001_ip = 1037; continue _fun0001;
 736:
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 0;
            var7 = var12[var5];
            var7 = var6.bind(var9)(var7);
            var11 = var7.intl;
            var7 = var11.formatToPlainString;
            var5 = var12[var5];
            var5 = var6.bind(var9)(var5);
            var5 = var5.t;
            var6 = var5.Jmwzd3;
            var5 = {};
            var5['count'] = var8;
            var2 = var7.bind(var11)(var6, var5);
            _fun0001_ip = 1037; continue _fun0001;
 802:
            var5 = var3.values;
            var5 = var5.length;
            if(!(!(var5 < var8))) { _fun0001_ip = 904; continue _fun0001 }
 816:
            var3 = var3.values;
            var3 = var3.length;
            var3 = var3 > var10;
            var2 = null;
            if(!var3) { _fun0001_ip = 1037; continue _fun0001 }
 838:
            var5 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 0;
            var6 = var11[var3];
            var6 = var5.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var3 = var11[var3];
            var3 = var5.bind(var9)(var3);
            var3 = var3.t;
            var5 = var3.LDvfRE;
            var3 = {};
            var3['count'] = var10;
            var2 = var6.bind(var7)(var5, var3);
            _fun0001_ip = 1037; continue _fun0001;
 904:
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 0;
            var6 = var10[var3];
            var6 = var5.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var3 = var10[var3];
            var3 = var5.bind(var9)(var3);
            var3 = var3.t;
            var5 = var3.Jmwzd3;
            var3 = {};
            var3['count'] = var8;
            var2 = var6.bind(var7)(var5, var3);
            _fun0001_ip = 1037; continue _fun0001;
 967:
            var10 = 0;
            var3 = null;
            if(!(var10 !== var8)) { _fun0001_ip = 1034; continue _fun0001 }
 975:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var6 = var4[var10];
            var6 = var5.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var4 = var4[var10];
            var4 = var5.bind(var9)(var4);
            var4 = var4.t;
            var5 = var4.Jmwzd3;
            var4 = {};
            var4['count'] = var8;
            var3 = var6.bind(var7)(var5, var4);
 1034:
            var2 = var3;
 1037:
            return var2;
 1039:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();