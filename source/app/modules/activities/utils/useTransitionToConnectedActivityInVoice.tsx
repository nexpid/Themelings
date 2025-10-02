// app/modules/activities/utils/useTransitionToConnectedActivityInVoice.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
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
    var4 = var4.ComponentActions;
    var _closure1_slot7 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/useTransitionToConnectedActivityInVoice.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useTransitionToConnectedActivityInVoice(arg1) {
        var2 = arg1;
        var5 = var2.onTransition;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var5 = function handler() {
                var1 = undefined;
                var4 = _closure3_slot1;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure3_slot0 = var5;
            var2 = function _handler() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                            var2 = arg1;
                            var8 = var2.location;
                            var _closure6_slot0 = var8;
                            var4 = undefined;
                            var _closure6_slot1 = var4;
                            SaveGenerator(address=34);
case 4:
                            return var4;
case 5:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                            var6 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var3 = 5;
                            var3 = var9[var3];
                            var6 = var6.bind(var4)(var3);
                            var3 = var6.getEmbeddedActivityLocationChannelId;
                            var9 = var3.bind(var6)(var8);
                            var6 = null;
                            if(!(var6 != var9)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                            var8 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var3 = 6;
                            var3 = var10[var3];
                            var3 = var8.bind(var4)(var3);
                            var3 = var3.bind(var4)(var9);
                            if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 10:
                            var8 = _closure1_slot6;
                            var3 = var8.getVoiceChannelId;
                            var3 = var3.bind(var8)();
                            if(!(var3 !== var9)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                            var8 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var3 = 7;
                            var3 = var10[var3];
                            var8 = var8.bind(var4)(var3);
                            var3 = {};
                            var3['channelId'] = var9;
                            var3 = var8.bind(var4)(var3);
                            SaveGenerator(address=167);
case 13:
                            return var3;
case 14:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                            if(var8) { _fun0001_ip = 15; continue _fun0001 }
case 11:
                            var8 = _closure1_slot5;
                            var7 = var8.getChannel;
                            var7 = var7.bind(var8)(var9);
                            var8 = var6 == var7;
                            var6 = undefined;
                            if(var8) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                            var6 = var7.guild_id;
case 16:
                            _closure6_slot1 = var6;
                            var6 = global;
                            var7 = var6.setTimeout;
                            var6 = function() {
                                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 8;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var4 = var3.bind(var1)(var2);
                                    var3 = _closure6_slot1;
                                    var2 = _closure6_slot0;
                                    var2 = var4.bind(var1)(var3, var2);
                                    var4 = _closure2_slot0;
                                    var3 = null;
                                    if(!(var3 != var4)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                                    var2 = _closure2_slot0;
                                    var2 = var2.bind(var1)();
case 18:
                                    return var1;
                                }
                            };
                            var5 = 0;
                            var5 = var7.bind(var4)(var6, var5);
case 8:
                            return var4;
case 15:
                            return var3;
case 6:
                            return var2;
case 2:
                            return var1;
                        }
                    };
                    var2 = var1.next;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure3_slot1 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure3_slot1 = var2;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 9;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var6.bind(var3)(var4);
            var4 = var3.ComponentDispatch;
            var3 = var4.subscribe;
            var2 = _closure1_slot7;
            var2 = var2.OPEN_EMBEDDED_ACTIVITY;
            var2 = var3.bind(var4)(var2, var5);
            var1 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 9;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var5 = var3.ComponentDispatch;
                var4 = var5.unsubscribe;
                var2 = _closure1_slot7;
                var3 = var2.OPEN_EMBEDDED_ACTIVITY;
                var2 = _closure3_slot0;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();