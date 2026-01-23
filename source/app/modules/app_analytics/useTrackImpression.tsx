// app/modules/app_analytics/useTrackImpression.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var2 = function trackImpression(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var4 = arguments[1];
            var1 = undefined;
            if(!(var4 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = false;
case 2:
            var6 = var5.name;
            var7 = var5.type;
            var11 = var5.properties;
            var8 = var5.type;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 5;
            var3 = var10[var3];
            var3 = var9.bind(var1)(var3);
            var3 = var3.ImpressionTypes;
            var3 = var3.MODAL;
            if(!(var8 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var5.name;
            var3 = null;
            if(!(var3 == var8)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var3 = _closure1_slot11;
            var9 = var3.bind(var1)();
            var8 = var9.some;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1._stackContext;
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var1 = var2.isSlide;
case 7:
                    return var1;
                }
            };
            var3 = var8.bind(var9)(var3);
            if(var3) { _fun0001_ip = 9; continue _fun0001 }
case 4:
            var3 = _closure1_slot7;
            var3 = var3.bind(var1)(var5);
            var3 = null;
            var5 = var3 == var11;
            var18 = undefined;
            if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var18 = var11.guild_id;
case 10:
            if(!(var3 == var18)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = _closure1_slot6;
            var5 = var8.getGuildId;
            var18 = var5.bind(var8)();
case 12:
            var5 = var3 == var11;
            var16 = undefined;
            if(var5) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var16 = var11.channel_id;
case 14:
            if(!(var3 == var16)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var8 = _closure1_slot5;
            var5 = var8.getChannelId;
            var16 = var5.bind(var8)(var18);
case 16:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 6;
            var5 = var14[var8];
            var10 = var13.bind(var1)(var5);
            var9 = var10.expandEventProperties;
            var5 = {};
            var5['impression_type'] = var7;
            var12 = _closure1_slot10;
            var12 = var12.bind(var1)();
            var5['location'] = var12;
            var12 = 8;
            var15 = var14[var12];
            var17 = var13.bind(var1)(var15);
            var15 = var17.collectGuildAnalyticsMetadata;
            var19 = var15.bind(var17)(var18);
            var20 = var5;
            var15 = copyDataProperties(var20, var19);
            var12 = var14[var12];
            var14 = var13.bind(var1)(var12);
            var13 = var14.collectChannelAnalyticsMetadata;
            var15 = _closure1_slot4;
            var12 = var15.getChannel;
            var12 = var12.bind(var15)(var16);
            var19 = var13.bind(var14)(var12);
            var20 = var5;
            var12 = copyDataProperties(var20, var19);
            var20 = var5;
            var19 = var11;
            var11 = copyDataProperties(var20, var19);
            var5 = var9.bind(var10)(var5);
            if(var4) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var4 = var3 != var6;
            if(!var4) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var4 = var3 != var7;
case 20:
            if(!var4) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var7 = var7.bind(var1)(var4);
            var4 = var7.debugLogEvent;
            var4 = var4.bind(var7)(var6, var5);
            var4 = _closure1_slot12;
            var4 = var4.bind(var1)(var6, var5);
case 22:
            var4 = _closure1_slot9;
            var4 = var4.bind(var1)(var6, var5);
            _fun0001_ip = 9; continue _fun0001;
case 18:
            var2 = _closure1_slot9;
            var2 = var2.bind(var1)(var3, var3);
case 9:
            return var1;
        }
    };
    var _closure1_slot13 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var11.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var11.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var11.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.setCurrentImpression;
    var _closure1_slot7 = var8;
    var8 = var5.cleanupImpression;
    var _closure1_slot8 = var8;
    var8 = var5.setDebugTrackedData;
    var _closure1_slot9 = var8;
    var8 = var5.getLocation;
    var _closure1_slot10 = var8;
    var5 = var5.getImpressionStack;
    var _closure1_slot11 = var5;
    var5 = 5;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.trackMaker;
    var5 = {};
    var10 = 6;
    var10 = var7[var10];
    var10 = var6.bind(var1)(var10);
    var10 = var10.AnalyticEventConfigs;
    var5['analyticEventConfigs'] = var10;
    var10 = 7;
    var10 = var7[var10];
    var10 = var11.bind(var1)(var10);
    var5['dispatcher'] = var10;
    var10 = 'TRACK';
    var5['TRACK_ACTION_NAME'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot12 = var5;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/app_analytics/useTrackImpression.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useTrackImpression(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arguments[1];
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var3 = {'disableTrack': false, 'trackOnInitialLoad': false};
case 24:
            var _closure2_slot1 = var3;
            var3 = arguments[2];
            var _closure2_slot2 = var3;
            var _closure2_slot3 = var1;
            var _closure2_slot4 = var1;
            var _closure2_slot5 = var1;
            var4 = _closure1_slot3;
            var5 = var4.useRef;
            var5 = var5.bind(var4)(var1);
            _closure2_slot3 = var5;
            var5 = var4.useRef;
            var5 = var5.bind(var4)(var1);
            _closure2_slot4 = var5;
            var5 = function trackImpressionEffect() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var8 = 9;
                    var2 = var2[var8];
                    var5 = undefined;
                    var7 = var4.bind(var5)(var2);
                    var4 = _closure2_slot3;
                    var6 = var4.current;
                    var4 = _closure2_slot0;
                    var4 = var7.bind(var5)(var6, var4);
                    var6 = !var4;
                    if(!var6) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var7 = _closure2_slot3;
                    var4 = _closure2_slot0;
                    var7['current'] = var4;
case 26:
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var8 = var7.bind(var5)(var4);
                    var4 = _closure2_slot4;
                    var7 = var4.current;
                    var4 = _closure2_slot2;
                    var4 = var8.bind(var5)(var7, var4);
                    var4 = !var4;
                    if(!var4) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var8 = _closure2_slot4;
                    var7 = _closure2_slot2;
                    var8['current'] = var7;
case 28:
                    if(var6) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    if(var4) { _fun0004_ip = 30; continue _fun0004 }
case 32:
                    return var5;
case 30:
                    var4 = {};
                    var9 = _closure2_slot0;
                    var10 = var4;
                    var6 = copyDataProperties(var10, var9);
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 10;
                    var6 = var8[var6];
                    var7 = var7.bind(var5)(var6);
                    var6 = 'impression_';
                    var7 = var7.bind(var5)(var6);
                    var6 = 'sequenceId';
                    var4[var6] = var7;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot13;
                    var2 = _closure2_slot1;
                    var2 = var2.disableTrack;
                    var2 = var3.bind(var5)(var4, var2);
                    var1 = function() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var3 = _closure3_slot0;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                            var3 = _closure1_slot8;
                            var2 = _closure3_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
case 33:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            _closure2_slot5 = var5;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 11;
            var3 = var6[var3];
            var5 = var5.bind(var1)(var3);
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var3 = var2.trackOnInitialLoad;
                    var2 = undefined;
                    if(var3) { _fun0006_ip = 35; continue _fun0006 }
case 25:
                    return var2;
case 35:
                    var1 = _closure2_slot5;
                    var1 = var1.bind(var2)();
                    return var1;
                }
            };
            var3 = var5.bind(var1)(var3);
            var3 = var4.useEffect;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var3 = var1.trackOnInitialLoad;
                    var1 = undefined;
                    if(var3) { _fun0007_ip = 36; continue _fun0007 }
case 25:
                    var2 = _closure2_slot5;
                    var2 = var2.bind(var1)();
                    return var2;
case 36:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['trackImpression'] = var2;
    return var1;
})();