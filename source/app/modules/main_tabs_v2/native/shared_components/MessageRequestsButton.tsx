// app/modules/main_tabs_v2/native/shared_components/MessageRequestsButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function useMessageRequestCounts() {
        var1 = {};
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var4 = 5;
        var8 = var7[var4];
        var5 = undefined;
        var11 = var6.bind(var5)(var8);
        var10 = var11.useStateFromStores;
        var8 = _closure1_slot5;
        var9 = new Array(1);
        var9[0] = var8;
        var8 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getMessageRequestsCount;
            var1 = var1.bind(var2)();
            return var1;
        };
        var8 = var10.bind(var11)(var9, var8);
        var1['requestCount'] = var8;
        var4 = var7[var4];
        var5 = var6.bind(var5)(var4);
        var4 = var5.useStateFromStores;
        var6 = _closure1_slot6;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            var2 = _closure1_slot6;
            var1 = var2.getSpamChannelsCount;
            var1 = var1.bind(var2)();
            return var1;
        };
        var2 = var4.bind(var5)(var3, var2);
        var1['spamCount'] = var2;
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function MessageRequestAnimation(arg1) {
        var1 = arg1;
        var5 = var1.color;
        var6 = _closure1_slot3;
        var4 = var6.useRef;
        var3 = null;
        var6 = var4.bind(var6)(var3);
        var _closure2_slot0 = var6;
        var3 = _closure1_slot10;
        var4 = undefined;
        var3 = var3.bind(var4)();
        var9 = var3.requestCount;
        var _closure2_slot1 = var9;
        var8 = _closure1_slot3;
        var7 = var8.useEffect;
        var3 = new Array(1);
        var3[0] = var9;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot1;
                var1 = 0;
                if(!(var2 > var1)) { _fun0001_ip = 57; continue _fun0001 }
 13:
                var1 = _closure2_slot0;
                var4 = null;
                var1 = var4 == var1;
                var2 = undefined;
                if(var1) { _fun0001_ip = 44; continue _fun0001 }
 28:
                var3 = _closure2_slot0;
                var3 = var3.current;
                var1 = var4 == var3;
                var2 = var3;
 44:
                if(var1) { _fun0001_ip = 57; continue _fun0001 }
 47:
                var1 = var2.play;
                var1 = var1.bind(var2)();
 57:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var7.bind(var8)(var2, var3);
        var3 = _closure1_slot7;
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 6;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.MessageRequestLottie;
        var1 = {};
        var1['ref'] = var6;
        var1['color'] = var5;
        var5 = 'sm';
        var1['size'] = var5;
        var5 = true;
        var1['autoPlay'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot11 = var1;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot4 = var8;
    var8 = var4.StyleSheet;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var7 = var8.create;
    var4 = {};
    var9 = {};
    var10 = 'relative';
    var9['position'] = var10;
    var4['buttonContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/MessageRequestsButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MessageRequestsButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg1;
            var2 = var6.alternateVariant;
            var5 = undefined;
            if(!(var2 === var5)) { _fun0002_ip = 17; continue _fun0002 }
 15:
            var2 = false;
 17:
            var1 = null;
            var4 = Object.create(var1);
            var9 = 0;
            var4['alternateVariant'] = var9;
            var22 = {};
            var21 = var6;
            var20 = var4;
            var13 = copyDataProperties(var22, var21, var20);
            var3 = _closure1_slot10;
            var3 = var3.bind(var5)();
            var7 = var3.requestCount;
            var3 = var3.spamCount;
            if(!(var9 === var7)) { _fun0002_ip = 75; continue _fun0002 }
 68:
            if(!(var9 !== var3)) { _fun0002_ip = 655; continue _fun0002 }
 75:
            if(var2) { _fun0002_ip = 246; continue _fun0002 }
 81:
            var4 = _closure1_slot7;
            var10 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 10;
            var2 = var14[var2];
            var3 = var10.bind(var5)(var2);
            var2 = {};
            var6 = 11;
            var6 = var14[var6];
            var6 = var10.bind(var5)(var6);
            var2['source'] = var6;
            var6 = _closure1_slot11;
            var2['IconComponent'] = var6;
            var12 = _closure1_slot0;
            var6 = 8;
            var10 = var14[var6];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var6 = var14[var6];
            var6 = var12.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.e7GWjY;
            var6 = var10.bind(var11)(var6);
            var2['accessibilityLabel'] = var6;
            var10 = var7 > var9;
            var6 = undefined;
            if(!var10) { _fun0002_ip = 205; continue _fun0002 }
 196:
            var10 = var7.toString;
            var6 = var10.bind(var7)();
 205:
            var2['buttonText'] = var6;
            var6 = var7 > var9;
            var2['badge'] = var6;
            var6 = 'right';
            var2['badgePosition'] = var6;
            var22 = var2;
            var21 = var13;
            var6 = copyDataProperties(var22, var21);
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 246:
            var2 = var7 > var9;
            var14 = undefined;
            if(!var2) { _fun0002_ip = 264; continue _fun0002 }
 255:
            var2 = var7.toString;
            var14 = var2.bind(var7)();
 264:
            var4 = _closure1_slot8;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = _closure1_slot9;
            var6 = var6.buttonContainer;
            var2['style'] = var6;
            var6 = false;
            var2['collapsable'] = var6;
            if(!(var1 == var14)) { _fun0002_ip = 438; continue _fun0002 }
 302:
            var11 = _closure1_slot7;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var6 = 9;
            var6 = var18[var6];
            var6 = var17.bind(var5)(var6);
            var10 = var6.IconButton;
            var6 = {'variant': 'secondary', 'size': 'sm'};
            var16 = _closure1_slot7;
            var15 = _closure1_slot11;
            var12 = {};
            var12 = var16.bind(var5)(var15, var12);
            var6['icon'] = var12;
            var12 = 8;
            var15 = var18[var12];
            var15 = var17.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var12 = var18[var12];
            var12 = var17.bind(var5)(var12);
            var12 = var12.t;
            var12 = var12.e7GWjY;
            var12 = var15.bind(var16)(var12);
            var6['accessibilityLabel'] = var12;
            var22 = var6;
            var21 = var13;
            var12 = copyDataProperties(var22, var21);
            var10 = var11.bind(var5)(var10, var6);
            _fun0002_ip = 577; continue _fun0002;
 438:
            var12 = _closure1_slot7;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var6 = 7;
            var6 = var18[var6];
            var6 = var17.bind(var5)(var6);
            var11 = var6.Button;
            var6 = {};
            var19 = _closure1_slot7;
            var16 = _closure1_slot11;
            var15 = {};
            var15 = var19.bind(var5)(var16, var15);
            var6['icon'] = var15;
            var15 = 'secondary';
            var6['variant'] = var15;
            var6['text'] = var14;
            var14 = 'sm';
            var6['size'] = var14;
            var14 = 8;
            var15 = var18[var14];
            var15 = var17.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.e7GWjY;
            var14 = var15.bind(var16)(var14);
            var6['accessibilityLabel'] = var14;
            var22 = var6;
            var21 = var13;
            var13 = copyDataProperties(var22, var21);
            var10 = var12.bind(var5)(var11, var6);
 577:
            var6 = new Array(2);
            var6[0] = var10;
            var7 = var7 > var9;
            if(!var7) { _fun0002_ip = 639; continue _fun0002 }
 592:
            var10 = _closure1_slot7;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 10;
            var8 = var11[var8];
            var8 = var9.bind(var5)(var8);
            var9 = var8.ButtonBadge;
            var8 = {};
            var11 = 'right';
            var8['badgePosition'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 639:
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 655:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();