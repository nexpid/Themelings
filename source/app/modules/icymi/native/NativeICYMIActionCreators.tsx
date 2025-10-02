// app/modules/icymi/native/NativeICYMIActionCreators.tsx
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
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.Endpoints;
    var _closure1_slot4 = var2;
    var2 = {};
    var4 = function customScoreGuild(arg1) {
        var2 = arg1;
        var3 = var2.guildId;
        var _closure2_slot0 = var3;
        var3 = var2.channelScores;
        var _closure2_slot1 = var3;
        var2 = var2.guildScore;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 2;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.icymiEnabled;
                    var3 = 'customScores';
                    var3 = var4.bind(var5)(var3);
                    if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 3;
                    var3 = var5[var3];
                    var3 = var4.bind(var2)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.put;
                    var3 = {};
                    var7 = _closure1_slot4;
                    var7 = var7.GRAVITY_CUSTOM_GUILD_SCORES;
                    var3['url'] = var7;
                    var7 = {};
                    var8 = _closure2_slot0;
                    var7['guild_id'] = var8;
                    var10 = _closure2_slot1;
                    var8 = null;
                    var10 = var8 == var10;
                    var8 = undefined;
                    if(var10) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var12 = _closure2_slot1;
                    var11 = var12.map;
                    var10 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.channelId;
                        var2 = var1.score;
                        var1 = {};
                        var1['channel_id'] = var3;
                        var1['score'] = var2;
                        return var1;
                    };
                    var8 = var11.bind(var12)(var10);
case 6:
                    var7['channel_scores'] = var8;
                    var8 = _closure2_slot2;
                    var7['guild_score'] = var8;
                    var3['body'] = var7;
                    var7 = true;
                    var3['rejectWithError'] = var7;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=191);
case 8:
                    return var3;
case 9:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var5 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var4 = 4;
                    var4 = var12[var4];
                    var8 = var5.bind(var2)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var10 = 'ICYMI_CUSTOM_SCORES_UPDATED';
                    var4['type'] = var10;
                    var10 = _closure2_slot0;
                    var4['guildId'] = var10;
                    var10 = _closure2_slot1;
                    var4['channelScores'] = var10;
                    var9 = _closure2_slot2;
                    var4['guildScore'] = var9;
                    var4 = var7.bind(var8)(var4);
                    var4 = 5;
                    var4 = var12[var4];
                    var7 = var5.bind(var2)(var4);
                    var5 = var7.open;
                    var4 = {};
                    var8 = 'GravityGuildScore';
                    var4['key'] = var8;
                    var11 = _closure1_slot0;
                    var8 = 6;
                    var9 = var12[var8];
                    var9 = var11.bind(var2)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var12[var8];
                    var8 = var11.bind(var2)(var8);
                    var8 = var8.t;
                    var8 = var8.OMdbs7;
                    var8 = var9.bind(var10)(var8);
                    var4['content'] = var8;
                    var4 = var5.bind(var7)(var4);
case 12: // try_end0
                    _fun0001_ip = 4; continue _fun0001;
case 10:
                    return var3;
case 13: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = 5;
                    var3 = var10[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.open;
                    var3 = {};
                    var7 = 'GravityGuildScore';
                    var3['key'] = var7;
                    var9 = _closure1_slot0;
                    var6 = 6;
                    var7 = var10[var6];
                    var7 = var9.bind(var2)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var10[var6];
                    var6 = var9.bind(var2)(var6);
                    var6 = var6.t;
                    var6 = var6.CG4Hkp;
                    var6 = var7.bind(var8)(var6);
                    var3['content'] = var6;
                    var3 = var4.bind(var5)(var3);
case 4:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['customScoreGuild'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/NativeICYMIActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();