// app/modules/channel_list_v2/native/GuildHeaderCoachmarks.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
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
    var4 = 'modules/channel_list_v2/native/GuildHeaderCoachmarks.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildHeaderCoachmarks(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.targetRef;
            var _closure2_slot0 = var2;
            var7 = var1.guild;
            var _closure2_slot1 = var7;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 4;
            var2 = var10[var2];
            var4 = undefined;
            var11 = var6.bind(var4)(var2);
            var9 = var11.useStateFromStores;
            var2 = _closure1_slot3;
            var8 = new Array(1);
            var8[0] = var2;
            var3 = new Array(1);
            var3[0] = var7;
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = var4.can;
                var1 = _closure1_slot4;
                var2 = var1.MANAGE_GUILD;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var9.bind(var11)(var8, var2, var3);
            var3 = 5;
            var3 = var10[var3];
            var8 = var6.bind(var4)(var3);
            var6 = var8.useMobileBoostProgressBarEnabled;
            var3 = 'GuildHeaderCoachmarks';
            var3 = var6.bind(var8)(var3);
            var6 = new Array(0);
            var9 = _closure1_slot1;
            var8 = 6;
            var8 = var10[var8];
            var9 = var9.bind(var4)(var8);
            var8 = var7.id;
            var8 = var9.bind(var4)(var8);
            var8 = var8.showFollowup;
            if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = var6.push;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 7;
            var8 = var11[var8];
            var8 = var10.bind(var4)(var8);
            var8 = var8.DismissibleContent;
            var8 = var8.GUILD_THEME_NUX_FOLLOWUP;
            var8 = var9.bind(var6)(var8);
case 2:
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var7.premiumProgressBarEnabled;
            var2 = !var7;
case 4:
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var3;
case 6:
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var6.push;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 7;
            var2 = var8[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.DismissibleContent;
            var2 = var2.BOOST_PROGRESS_BAR_MOBILE_COACHMARK;
            var2 = var3.bind(var6)(var2);
case 8:
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 8;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['contentTypes'] = var6;
            var5 = function children(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.visibleContent;
                    var5 = var1.markAsDismissed;
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var7 = 7;
                    var2 = var2[var7];
                    var4 = undefined;
                    var2 = var6.bind(var4)(var2);
                    var2 = var2.DismissibleContent;
                    var2 = var2.BOOST_PROGRESS_BAR_MOBILE_COACHMARK;
                    if(!(var2 !== var3)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var2 = var6.bind(var4)(var2);
                    var2 = var2.DismissibleContent;
                    var2 = var2.GUILD_THEME_NUX_FOLLOWUP;
                    if(!(var2 !== var3)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var2 = null;
                    return var2;
case 12:
                    var6 = _closure1_slot5;
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 10;
                    var2 = var7[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var8 = _closure2_slot0;
                    var2['targetRef'] = var8;
                    var7 = _closure2_slot1;
                    var2['guild'] = var7;
                    var2['markAsDismissed'] = var5;
                    var2 = var6.bind(var4)(var3, var2);
                    return var2;
case 10:
                    var3 = _closure1_slot5;
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 9;
                    var1 = var6[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var7 = _closure2_slot0;
                    var1['targetRef'] = var7;
                    var6 = _closure2_slot1;
                    var1['guild'] = var6;
                    var1['markAsDismissed'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();