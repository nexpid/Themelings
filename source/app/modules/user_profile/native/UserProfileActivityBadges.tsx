// app/modules/user_profile/native/UserProfileActivityBadges.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityTypes;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    var4['container'] = var9;
    var9 = {};
    var10 = 'bold';
    var9['fontWeight'] = var10;
    var4['bold'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileActivityBadges.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function TimestampBadge(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.activity;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var4 = var1.ActiveTimestampStylingExperiment;
            var3 = var4.useConfig;
            var1 = {};
            var6 = 'active_timestamp';
            var1['location'] = var6;
            var1 = var3.bind(var4)(var1);
            var12 = var1.enabled;
            var1 = _closure1_slot7;
            var11 = var1.bind(var5)();
            var3 = var2.timestamps;
            var1 = null;
            var4 = var1 == var3;
            var13 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var13 = var3.start;
case 2:
            if(!(var1 == var13)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = var2.created_at;
case 4:
            if(!(var1 != var13)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 11;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.bind(var5)(var2);
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 5;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.bind(var5)(var2);
            if(var3) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var4 = var2.type;
            var3 = _closure1_slot4;
            var3 = var3.WATCHING;
            if(!(var4 !== var3)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var3 = var2.type;
            var2 = _closure1_slot4;
            var2 = var2.LISTENING;
            if(!(var3 !== var2)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 9;
            var2 = var4[var2];
            var2 = var3.bind(var5)(var2);
            var8 = var2.GameControllerIcon;
            _fun0001_ip = 15; continue _fun0001;
case 13:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 8;
            var2 = var4[var2];
            var2 = var3.bind(var5)(var2);
            var8 = var2.MusicIcon;
case 15:
            _fun0001_ip = 16; continue _fun0001;
case 11:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 7;
            var2 = var4[var2];
            var2 = var3.bind(var5)(var2);
            var8 = var2.TvIcon;
case 16:
            _fun0001_ip = 17; continue _fun0001;
case 9:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 6;
            var2 = var4[var2];
            var2 = var3.bind(var5)(var2);
            var8 = var2.ActivitiesIcon;
case 17:
            var4 = _closure1_slot6;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var11.container;
            var2['style'] = var6;
            var9 = _closure1_slot5;
            var6 = {};
            var10 = 'xxs';
            var6['size'] = var10;
            var15 = _closure1_slot1;
            var10 = _closure1_slot2;
            var14 = 12;
            var14 = var10[var14];
            var14 = var15.bind(var5)(var14);
            var14 = var14.colors;
            var14 = var14.TEXT_FEEDBACK_POSITIVE;
            var6['color'] = var14;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var8 = _closure1_slot0;
            var7 = 13;
            var7 = var10[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.ActiveTimestamp;
            var7 = {};
            var10 = {};
            var10['start'] = var13;
            var7['entry'] = var10;
            var10 = undefined;
            if(var12) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var10 = var11.bold;
case 18:
            var7['style'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 6:
            return var1;
        }
    };
    var3['TimestampBadge'] = var4;
    var4 = function PartyBadge(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.activity;
            var1 = _closure1_slot7;
            var5 = undefined;
            var6 = var1.bind(var5)();
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)(var2);
            if(var1) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var3 = var2.party;
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 20; continue _fun0002 }
case 22:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 14;
            var3 = var7[var3];
            var7 = var4.bind(var5)(var3);
            var4 = var7.getRichGameStateBadgeText;
            var3 = var2.state;
            var2 = var2.party;
            var10 = var4.bind(var7)(var3, var2);
            var2 = var1 == var10;
            var1 = null;
            if(var2) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var4 = _closure1_slot6;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var6.container;
            var2['style'] = var6;
            var9 = _closure1_slot5;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 15;
            var6 = var11[var6];
            var6 = var8.bind(var5)(var6);
            var7 = var6.GroupIcon;
            var6 = {};
            var13 = 'xxs';
            var6['size'] = var13;
            var13 = _closure1_slot1;
            var12 = 12;
            var12 = var11[var12];
            var12 = var13.bind(var5)(var12);
            var12 = var12.colors;
            var12 = var12.TEXT_MUTED;
            var6['color'] = var12;
            var7 = var9.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = 16;
            var7 = var11[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 23:
            return var1;
case 20:
            var1 = null;
            return var1;
        }
    };
    var3['PartyBadge'] = var4;
    var2 = function EpisodeBadge(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var1 = var1.activity;
            var2 = _closure1_slot7;
            var5 = undefined;
            var6 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 14;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.getEpisodeBadgeText;
            var7 = var1.assets;
            var1 = null;
            var8 = var1 == var7;
            var2 = undefined;
            if(var8) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var2 = var7.large_text;
case 25:
            var10 = var3.bind(var4)(var2);
            var2 = var1 == var10;
            var1 = null;
            if(var2) { _fun0003_ip = 13; continue _fun0003 }
case 27:
            var4 = _closure1_slot6;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var6.container;
            var2['style'] = var6;
            var9 = _closure1_slot5;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 17;
            var6 = var11[var6];
            var6 = var8.bind(var5)(var6);
            var7 = var6.TopicsIcon;
            var6 = {};
            var13 = 'xxs';
            var6['size'] = var13;
            var13 = _closure1_slot1;
            var12 = 12;
            var12 = var11[var12];
            var12 = var13.bind(var5)(var12);
            var12 = var12.colors;
            var12 = var12.TEXT_MUTED;
            var6['color'] = var12;
            var7 = var9.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = 16;
            var7 = var11[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 13:
            return var1;
        }
    };
    var3['EpisodeBadge'] = var2;
    return var1;
})();