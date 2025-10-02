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
            var3 = var1.activity;
            var1 = _closure1_slot7;
            var5 = undefined;
            var10 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var1 = var2.bind(var5)(var1);
            var6 = var1.ActivitiesControllerIconMobileExperiment;
            var4 = var6.useExperiment;
            var2 = {};
            var1 = 'UserProfileActivityBadges';
            var2['location'] = var1;
            var1 = {};
            var8 = true;
            var1['autoTrackExposure'] = var8;
            var1 = var4.bind(var6)(var2, var1);
            var2 = var1.enabled;
            var4 = var3.timestamps;
            var1 = null;
            var6 = var1 == var4;
            var12 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = var4.start;
case 2:
            if(!(var1 == var12)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = var3.created_at;
case 4:
            if(!(var1 != var12)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 11;
            var4 = var8[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.bind(var5)(var3);
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            if(!(var2 === var5)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var2 = false;
case 9:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 5;
            var4 = var8[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.bind(var5)(var3);
            if(var4) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var6 = var3.type;
            var4 = _closure1_slot4;
            var4 = var4.WATCHING;
            if(!(var6 !== var4)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var4 = var3.type;
            var3 = _closure1_slot4;
            var3 = var3.LISTENING;
            if(!(var4 !== var3)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 6;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var8 = var3.GameControllerIcon;
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 9;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var8 = var3.MusicIcon;
case 17:
            _fun0001_ip = 18; continue _fun0001;
case 13:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 8;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var8 = var3.TvIcon;
case 18:
            _fun0001_ip = 19; continue _fun0001;
case 11:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            if(var2) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var2 = 7;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ActivitiesIcon;
            _fun0001_ip = 22; continue _fun0001;
case 20:
            var3 = 6;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var2 = var3.GameControllerIcon;
case 22:
            var8 = var2;
case 19:
            var4 = _closure1_slot6;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var10.container;
            var2['style'] = var6;
            var9 = _closure1_slot5;
            var6 = {};
            var11 = 'xxs';
            var6['size'] = var11;
            var14 = _closure1_slot1;
            var11 = _closure1_slot2;
            var13 = 12;
            var13 = var11[var13];
            var13 = var14.bind(var5)(var13);
            var13 = var13.colors;
            var13 = var13.TEXT_POSITIVE;
            var6['color'] = var13;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var8 = _closure1_slot0;
            var7 = 13;
            var7 = var11[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.ActiveTimestamp;
            var7 = {};
            var11 = {};
            var11['start'] = var12;
            var7['entry'] = var11;
            var10 = var10.bold;
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
            if(var1) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var3 = var2.party;
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 23; continue _fun0002 }
case 25:
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
            if(var2) { _fun0002_ip = 26; continue _fun0002 }
case 27:
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
case 26:
            return var1;
case 23:
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
            if(var8) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var2 = var7.large_text;
case 28:
            var10 = var3.bind(var4)(var2);
            var2 = var1 == var10;
            var1 = null;
            if(var2) { _fun0003_ip = 30; continue _fun0003 }
case 31:
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
case 30:
            return var1;
        }
    };
    var3['EpisodeBadge'] = var2;
    return var1;
})();