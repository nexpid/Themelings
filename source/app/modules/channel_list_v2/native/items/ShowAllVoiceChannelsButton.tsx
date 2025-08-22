// app/modules/channel_list_v2/native/items/ShowAllVoiceChannelsButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Dimensions;
    var _closure1_slot3 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var12 = var2.guildId;
            var _closure2_slot0 = var12;
            var11 = var2.section;
            var _closure2_slot1 = var11;
            var10 = var2.listRef;
            var _closure2_slot2 = var10;
            var2 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 4;
            var3 = var8[var3];
            var4 = undefined;
            var9 = var2.bind(var4)(var3);
            var7 = var9.useStateFromStores;
            var3 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure1_slot4;
                var2 = var3.isVoiceCategoryCollapsed;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var7.bind(var9)(var6, var3);
            var _closure2_slot3 = var7;
            var9 = _closure1_slot2;
            var6 = var9.useCallback;
            var3 = new Array(4);
            var3[0] = var7;
            var3[1] = var12;
            var3[2] = var11;
            var3[3] = var10;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot3;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 5;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    if(var3) { _fun0002_ip = 80; continue _fun0002 }
 35:
                    var5 = var4.voiceCategoryCollapse;
                    var3 = _closure2_slot0;
                    var3 = var5.bind(var4)(var3);
                    var3 = _closure2_slot2;
                    var6 = var3.current;
                    var3 = null;
                    if(!(var3 != var6)) { _fun0002_ip = 120; continue _fun0002 }
 65:
                    var5 = var6.scrollToTop;
                    var3 = false;
                    var3 = var5.bind(var6)(var3);
                    _fun0002_ip = 120; continue _fun0002;
 80:
                    var3 = var4.voiceCategoryExpand;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = function() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var1 = _closure2_slot2;
                            var3 = var1.current;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0003_ip = 116; continue _fun0003 }
 18:
                            var2 = var3.scrollToLocation;
                            var1 = {'animated': false, 'section': null, 'item': 0};
                            var4 = _closure2_slot1;
                            var1['section'] = var4;
                            var4 = global;
                            var6 = var4.Math;
                            var5 = var6.round;
                            var8 = _closure1_slot3;
                            var7 = var8.get;
                            var4 = 'window';
                            var4 = var7.bind(var8)(var4);
                            var7 = var4.height;
                            var4 = 0.3;
                            var4 = var4 * var7;
                            var4 = var5.bind(var6)(var4);
                            var1['paddingStart'] = var4;
                            var1 = var2.bind(var3)(var1);
 116:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = 0;
                    var2 = var4.bind(var1)(var3, var2);
 120:
                    return var1;
                }
            };
            var6 = var6.bind(var9)(var1, var3);
            var3 = _closure1_slot5;
            var1 = 6;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Button;
            var1 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var8 = 7;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            if(var7) { _fun0001_ip = 220; continue _fun0001 }
 205:
            var7 = var8.Q2gPWl;
            var7 = var9.bind(var10)(var7);
            _fun0001_ip = 233; continue _fun0001;
 220:
            var8 = var8./eB9Bg;
            var7 = var9.bind(var10)(var8);
 233:
            var1['text'] = var7;
            var9 = _closure1_slot5;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 8;
            var5 = var8[var5];
            var5 = var7.bind(var4)(var5);
            var8 = var5.VoiceNormalIcon;
            var7 = {};
            var5 = 'sm';
            var7['size'] = var5;
            var7 = var9.bind(var4)(var8, var7);
            var1['icon'] = var7;
            var1['onPress'] = var6;
            var6 = 'secondary';
            var1['variant'] = var6;
            var1['size'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/items/ShowAllVoiceChannelsButton.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();