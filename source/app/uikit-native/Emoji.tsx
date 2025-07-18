// app/uikit-native/Emoji.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/Emoji.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.src;
            var9 = var1.name;
            var7 = var1.style;
            var11 = var1.textEmojiStyle;
            var12 = var1.fastImageStyle;
            var5 = var1.forceTextEmoji;
            var10 = var1.adjustsFontSizeToFit;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 4;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            var13 = var2;
            if(!var1) { _fun0001_ip = 123; continue _fun0001 }
 83:
            var1 = null;
            var13 = var2;
            if(!(var1 == var13)) { _fun0001_ip = 123; continue _fun0001 }
 92:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getURL;
            var13 = var1.bind(var2)(var9);
 123:
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var1['style'] = var7;
            if(var5) { _fun0001_ip = 299; continue _fun0001 }
 143:
            var5 = null;
            if(!(var5 != var13)) { _fun0001_ip = 299; continue _fun0001 }
 152:
            var5 = '';
            if(!(var5 !== var13)) { _fun0001_ip = 299; continue _fun0001 }
 163:
            var8 = _closure1_slot5;
            var7 = _closure1_slot1;
            var15 = _closure1_slot2;
            var5 = 7;
            var5 = var15[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var14 = 'contain';
            var5['resizeMode'] = var14;
            var5['style'] = var12;
            var14 = _closure1_slot0;
            var12 = 8;
            var12 = var15[var12];
            var15 = var14.bind(var4)(var12);
            var14 = var15.isThemeDark;
            var12 = _closure1_slot4;
            var12 = var12.theme;
            var12 = var14.bind(var15)(var12);
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            if(var12) { _fun0001_ip = 263; continue _fun0001 }
 249:
            var12 = 10;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            _fun0001_ip = 275; continue _fun0001;
 263:
            var14 = 9;
            var14 = var16[var14];
            var12 = var15.bind(var4)(var14);
 275:
            var5['placeholder'] = var12;
            var12 = {};
            var12['uri'] = var13;
            var5['source'] = var12;
            var5 = var8.bind(var4)(var7, var5);
            _fun0001_ip = 357; continue _fun0001;
 299:
            var8 = _closure1_slot5;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 6;
            var6 = var12[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.LegacyText;
            var6 = {};
            var6['style'] = var11;
            var11 = false;
            var6['allowFontScaling'] = var11;
            var6['adjustsFontSizeToFit'] = var10;
            var6['children'] = var9;
            var5 = var8.bind(var4)(var7, var6);
 357:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();