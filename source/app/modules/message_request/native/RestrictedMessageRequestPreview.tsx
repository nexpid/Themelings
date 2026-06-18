// app/modules/message_request/native/RestrictedMessageRequestPreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var12 = 0;
    var4 = var6[var12];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var13 = 1;
    var7 = var6[var13];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ScrollView;
    var _closure1_slot5 = var7;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var13;
    var10 = 8;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var14;
    var4['container'] = var9;
    var9 = {};
    var9['flex'] = var13;
    var4['scroll'] = var9;
    var9 = {};
    var9['opacity'] = var12;
    var4['hidden'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['paddingHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['paddingTop'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['paddingBottom'] = var12;
    var4['scrollContent'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_12;
    var9['paddingHorizontal'] = var10;
    var4['footer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/message_request/native/RestrictedMessageRequestPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function RestrictedMessageRequestPreview(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var18 = var1.channelId;
            var _closure2_slot0 = var18;
            var5 = undefined;
            var _closure2_slot6 = var5;
            var1 = _closure1_slot12;
            var10 = var1.bind(var5)();
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var2 = 9;
            var2 = var1[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.bind(var5)();
            var16 = var2.bottom;
            var4 = _closure1_slot4;
            var2 = var4.useRef;
            var13 = null;
            var11 = var2.bind(var4)(var13);
            var _closure2_slot1 = var11;
            var2 = var4.useRef;
            var3 = false;
            var2 = var2.bind(var4)(var3);
            var _closure2_slot2 = var2;
            var2 = var4.useState;
            var4 = var2.bind(var4)(var3);
            var3 = _closure1_slot3;
            var2 = 2;
            var4 = var3.bind(var5)(var4, var2);
            var3 = 0;
            var14 = var4[var3];
            var _closure2_slot3 = var14;
            var2 = 1;
            var2 = var4[var2];
            var _closure2_slot4 = var2;
            var2 = _closure1_slot0;
            var4 = 10;
            var6 = var1[var4];
            var17 = var2.bind(var5)(var6);
            var15 = var17.useStateFromStores;
            var6 = _closure1_slot8;
            var12 = new Array(1);
            var12[0] = var6;
            var8 = new Array(1);
            var8[0] = var18;
            var6 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getMessages;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var6 = var15.bind(var17)(var12, var6, var8);
            var _closure2_slot5 = var6;
            var1 = var1[var4];
            var12 = var2.bind(var5)(var1);
            var8 = var12.useStateFromStores;
            var1 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var1;
            var2 = new Array(1);
            var2[0] = var18;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var8.bind(var12)(var6, var1, var2);
            var2 = var13 == var12;
            var1 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var12.recipients;
            var6 = var13 == var2;
            var1 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = var2[var3];
case 2:
            _closure2_slot6 = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var6 = var3.bind(var5)(var2);
            var4 = var6.useStateFromStores;
            var2 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var4 = _closure1_slot9;
                    var3 = var4.getUser;
                    var2 = _closure2_slot6;
                    var1 = var3.bind(var4)(var2);
case 5:
                    return var1;
                }
            };
            var17 = var4.bind(var6)(var3, var1, var2);
            var4 = _closure1_slot4;
            var3 = var4.useEffect;
            var2 = new Array(1);
            var2[0] = var14;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = undefined;
                    if(var3) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var3 = global;
                    var5 = var3.setTimeout;
                    var4 = function() {
                        var3 = _closure2_slot4;
                        var2 = undefined;
                        var1 = true;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var3 = 1000;
                    var3 = var5.bind(var1)(var4, var3);
                    var _closure3_slot0 = var3;
                    var2 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var2;
case 7:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            var2 = var13 == var12;
            var1 = null;
            if(var2) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var2 = var13 == var17;
            var1 = null;
            if(var2) { _fun0001_ip = 9; continue _fun0001 }
case 11:
            var4 = _closure1_slot11;
            var3 = _closure1_slot6;
            var2 = {};
            var6 = var10.container;
            var2['style'] = var6;
            var8 = _closure1_slot5;
            var6 = {};
            var6['ref'] = var11;
            var15 = var10.scroll;
            var11 = new Array(2);
            var11[0] = var15;
            var13 = null;
            if(var14) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var13 = var10.hidden;
case 12:
            var11[1] = var13;
            var6['style'] = var11;
            var11 = var10.scrollContent;
            var6['contentContainerStyle'] = var11;
            var11 = function onScrollBeginDrag() {
                var2 = _closure2_slot2;
                var1 = true;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var6['onScrollBeginDrag'] = var11;
            var9 = function onContentSizeChange() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var1 = var1.current;
                    if(var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var1 = _closure2_slot1;
                    var4 = var1.current;
                    var1 = null;
                    if(!(var1 != var4)) { _fun0004_ip = 14; continue _fun0004 }
case 16:
                    var3 = var4.scrollToEnd;
                    var1 = {};
                    var5 = false;
                    var1['animated'] = var5;
                    var1 = var3.bind(var4)(var1);
case 14:
                    var1 = _closure2_slot3;
                    var1 = !var1;
                    if(!var1) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var1 = _closure2_slot5;
case 17:
                    if(!var1) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var1 = global;
                    var3 = var1.requestAnimationFrame;
                    var2 = undefined;
                    var1 = function() {
                        var3 = _closure2_slot4;
                        var2 = undefined;
                        var1 = true;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var1 = var3.bind(var2)(var1);
case 19:
                    var1 = undefined;
                    return var1;
                }
            };
            var6['onContentSizeChange'] = var9;
            var9 = _closure1_slot10;
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var14 = 11;
            var14 = var13[var14];
            var15 = var11.bind(var5)(var14);
            var14 = {};
            var14['channel'] = var12;
            var14['user'] = var17;
            var15 = var9.bind(var5)(var15, var14);
            var14 = new Array(2);
            var14[0] = var15;
            var15 = 12;
            var15 = var13[var15];
            var17 = var11.bind(var5)(var15);
            var15 = {};
            var15['channelId'] = var18;
            var15 = var9.bind(var5)(var17, var15);
            var14[1] = var15;
            var6['children'] = var14;
            var8 = var4.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var8 = _closure1_slot6;
            var7 = {};
            var14 = var10.footer;
            var10 = new Array(2);
            var10[0] = var14;
            var14 = {};
            var15 = 8;
            var15 = var13[var15];
            var15 = var11.bind(var5)(var15);
            var15 = var15.space;
            var15 = var15.PX_8;
            var15 = var15 + var16;
            var14['paddingBottom'] = var15;
            var10[1] = var14;
            var7['style'] = var10;
            var10 = 13;
            var10 = var13[var10];
            var11 = var11.bind(var5)(var10);
            var10 = {};
            var10['channel'] = var12;
            var10 = var9.bind(var5)(var11, var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 9:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();