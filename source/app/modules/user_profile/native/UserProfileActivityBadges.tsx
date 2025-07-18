// app/modules/user_profile/native/UserProfileActivityBadges.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
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
    var4 = native4;
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
 0:
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
            if(var6) { _fun0001_ip = 108; continue _fun0001 }
 103:
            var12 = var4.start;
 108:
            if(!(var1 == var12)) { _fun0001_ip = 118; continue _fun0001 }
 112:
            var12 = var3.created_at;
 118:
            if(!(var1 != var12)) { _fun0001_ip = 516; continue _fun0001 }
 125:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 11;
            var4 = var8[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.bind(var5)(var3);
            if(var4) { _fun0001_ip = 516; continue _fun0001 }
 156:
            if(!(var2 === var5)) { _fun0001_ip = 162; continue _fun0001 }
 160:
            var2 = false;
 162:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 5;
            var4 = var8[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.bind(var5)(var3);
            if(var4) { _fun0001_ip = 315; continue _fun0001 }
 193:
            var6 = var3.type;
            var4 = _closure1_slot4;
            var4 = var4.WATCHING;
            if(!(var6 !== var4)) { _fun0001_ip = 287; continue _fun0001 }
 212:
            var4 = var3.type;
            var3 = _closure1_slot4;
            var3 = var3.LISTENING;
            if(!(var4 !== var3)) { _fun0001_ip = 259; continue _fun0001 }
 231:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 6;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var8 = var3.GameControllerIcon;
            _fun0001_ip = 285; continue _fun0001;
 259:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 9;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var8 = var3.MusicIcon;
 285:
            _fun0001_ip = 313; continue _fun0001;
 287:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 8;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var8 = var3.TvIcon;
 313:
            _fun0001_ip = 367; continue _fun0001;
 315:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            if(var2) { _fun0001_ip = 346; continue _fun0001 }
 326:
            var2 = 7;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ActivitiesIcon;
            _fun0001_ip = 364; continue _fun0001;
 346:
            var3 = 6;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var2 = var3.GameControllerIcon;
 364:
            var8 = var2;
 367:
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
 516:
            return var1;
        }
    };
    var3['TimestampBadge'] = var4;
    var4 = function PartyBadge(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
            if(var1) { _fun0002_ip = 284; continue _fun0002 }
 53:
            var3 = var2.party;
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 284; continue _fun0002 }
 68:
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
            if(var2) { _fun0002_ip = 282; continue _fun0002 }
 123:
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
 282:
            return var1;
 284:
            var1 = null;
            return var1;
        }
    };
    var3['PartyBadge'] = var4;
    var2 = function EpisodeBadge(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
            if(var8) { _fun0003_ip = 71; continue _fun0003 }
 65:
            var2 = var7.large_text;
 71:
            var10 = var3.bind(var4)(var2);
            var2 = var1 == var10;
            var1 = null;
            if(var2) { _fun0003_ip = 247; continue _fun0003 }
 88:
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
 247:
            return var1;
        }
    };
    var3['EpisodeBadge'] = var2;
    return var1;
})();