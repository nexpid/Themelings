// app/modules/quests/native/VideoQuestModal/hooks/useVideoQuestCaptions.tsx
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = {};
    var7 = 'none';
    var4['NONE'] = var7;
    var7 = 'loading';
    var4['LOADING'] = var7;
    var7 = 'success';
    var4['SUCCESS'] = var7;
    var7 = 'error';
    var4['ERROR'] = var7;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/VideoQuestModal/hooks/useVideoQuestCaptions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var10 = 2;
            var5 = var2[var10];
            var9 = undefined;
            var8 = var4.bind(var9)(var5);
            var7 = var8.resolveVideoQuestAsset;
            var5 = 3;
            var5 = var2[var5];
            var5 = var4.bind(var9)(var5);
            var5 = var5.FirstPartyQuestTaskTypes;
            var14 = var5.WATCH_VIDEO_ON_MOBILE;
            var5 = var2[var10];
            var5 = var4.bind(var9)(var5);
            var5 = var5.VideoVariant;
            var13 = var5.VIDEO;
            var2 = var2[var10];
            var2 = var4.bind(var9)(var2);
            var2 = var2.VideoAssetProperty;
            var12 = var2.CAPTION;
            var15 = arg1;
            var16 = var8;
            var2 = var16[var7](var15, var14, var13, var12, var11);
            var11 = null;
            var4 = var11 == var2;
            var7 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var2.url;
case 2:
            var _closure2_slot0 = var7;
            var6 = _closure1_slot3;
            var4 = var6.useState;
            var2 = _closure1_slot4;
            var2 = var2.NONE;
            var2 = var4.bind(var6)(var2);
            var8 = _closure1_slot2;
            var4 = var8.bind(var9)(var2, var10);
            var3 = 0;
            var2 = var4[var3];
            var5 = 1;
            var4 = var4[var5];
            var _closure2_slot1 = var4;
            var4 = var6.useState;
            var4 = var4.bind(var6)(var11);
            var4 = var8.bind(var9)(var4, var10);
            var3 = var4[var3];
            var4 = var4[var5];
            var _closure2_slot2 = var4;
            var5 = var6.useEffect;
            var4 = new Array(1);
            var4[0] = var7;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure2_slot1;
                    var2 = _closure1_slot4;
                    var3 = var2.NONE;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0002_ip = 6; continue _fun0002;
case 4:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var2['url'] = var5;
                    var5 = true;
                    var2['rejectWithError'] = var5;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.then;
                    var2 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var2 = arg1;
case 7: // try_start_0
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var3 = 5;
                            var4 = var4[var3];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.parseVtt;
                            var2 = var2.text;
                            var4 = var4.bind(var5)(var2);
                            var5 = _closure2_slot2;
                            var4 = var4.cues;
                            var4 = var5.bind(var3)(var4);
                            var2 = _closure2_slot1;
                            var1 = _closure1_slot4;
                            var1 = var1.SUCCESS;
                            var1 = var2.bind(var3)(var1);
case 8: // try_end0
                            _fun0003_ip = 9; continue _fun0003;
case 10: // catch_target0
                            CatchBlockStart(arg_register=0);
                            var3 = _closure2_slot1;
                            var1 = _closure1_slot4;
                            var2 = var1.ERROR;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
case 9:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.catch;
                    var1 = function() {
                        var3 = _closure2_slot1;
                        var1 = _closure1_slot4;
                        var2 = var1.ERROR;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var5.bind(var6)(var1, var4);
            var1 = {};
            var1['captions'] = var3;
            var1['status'] = var2;
            return var1;
        }
    };
    var3['useVideoQuestCaptions'] = var2;
    return var1;
})();