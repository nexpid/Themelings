// app/modules/content_inventory/matchUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var11;
    var8 = function isSpotifyEntry(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 3;
            var1 = var1[var6];
            var5 = undefined;
            var4 = var4.bind(var5)(var1);
            var1 = var4.isListenedSessionEntry;
            var1 = var1.bind(var4)(var3);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var4 = var4.bind(var5)(var1);
            var1 = var4.isTopArtistEntry;
            var1 = var1.bind(var4)(var3);
            var4 = !var1;
            var1 = !var4;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var3.extra;
            var4 = var4.media;
            var6 = var4.provider;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 4;
            var4 = var8[var4];
            var4 = var7.bind(var5)(var4);
            var4 = var4.ContentInventoryListenedMediaProvider;
            var4 = var4.SPOTIFY;
            var1 = var6 === var4;
case 4:
            _fun0001_ip = 6; continue _fun0001;
case 2:
            var3 = var3.extra;
            var4 = var3.entries;
            var3 = 0;
            var4 = var4[var3];
            var6 = null;
            var7 = var6 == var4;
            var3 = undefined;
            if(var7) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var4 = var4.media;
            var6 = var6 == var4;
            var3 = undefined;
            if(var6) { _fun0001_ip = 7; continue _fun0001 }
case 9:
            var3 = var4.provider;
case 7:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ContentInventoryListenedMediaProvider;
            var2 = var2.SPOTIFY;
            var1 = var3 === var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot6 = var8;
    var7 = function isCrunchyrollEntry(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 3;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var1 = var4.isWatchedMediaEntry;
            var1 = var1.bind(var4)(var3);
            var4 = !var1;
            var1 = !var4;
            if(var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = var3.extra;
            var3 = var3.application_id;
            var2 = _closure1_slot5;
            var1 = var3 === var2;
case 10:
            return var1;
        }
    };
    var _closure1_slot7 = var7;
    var6 = function isMatchingApplicationActivity(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg2;
            var1 = arg1;
            var4 = var1.extra;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var2 = 'application_id';
            var2 = var2 in var5;
            if(!var2) { _fun0003_ip = 11; continue _fun0003 }
case 14:
            var6 = var5.application_id;
            var3 = var4.application_id;
            var2 = var6 === var3;
case 11:
            if(var2) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var3 = 'game_name';
            var3 = var3 in var4;
            if(var3) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var3 = 'activity_name';
            var3 = var3 in var4;
            if(!var3) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var7 = var5.name;
            var6 = var4.activity_name;
            var3 = var7 === var6;
case 19:
            _fun0003_ip = 21; continue _fun0003;
case 17:
            var5 = var5.name;
            var4 = var4.game_name;
            var3 = var5 === var4;
case 21:
            var2 = var3;
case 15:
            var1 = var2;
case 12:
            return var1;
        }
    };
    var _closure1_slot8 = var6;
    var5 = function isMatchingListeningActivity(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot6;
            var4 = undefined;
            var1 = arg1;
            var3 = var3.bind(var4)(var1);
            var1 = !var3;
            var1 = !var1;
            if(!var3) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var3 = _closure1_slot4;
            var2 = arg2;
            var5 = var2.party;
            var2 = null;
            var6 = var2 == var5;
            var2 = undefined;
            if(var6) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var2 = var5.id;
case 24:
            var1 = var3.bind(var4)(var2);
case 22:
            return var1;
        }
    };
    var _closure1_slot9 = var5;
    var4 = function isMatchingWatchActivity(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 5;
            var4 = var5[var4];
            var5 = undefined;
            var4 = var6.bind(var5)(var4);
            var4 = var4.bind(var5)(var2);
            var4 = !var4;
            if(var4) { _fun0005_ip = 26; continue _fun0005 }
case 3:
            var1 = _closure1_slot7;
            var1 = var1.bind(var5)(var3);
            var4 = !var1;
case 26:
            var1 = !var4;
            if(var4) { _fun0005_ip = 27; continue _fun0005 }
case 22:
            var3 = var3.extra;
            var3 = var3.media_title;
            var2 = var2.details;
            var1 = var3 === var2;
case 27:
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var1 = global;
    var13 = var1.Object;
    var12 = var13.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var9);
    var1 = 0;
    var9 = var11[var1];
    var1 = undefined;
    var9 = var10.bind(var1)(var9);
    var9 = var9.ActivityTypes;
    var _closure1_slot3 = var9;
    var9 = 1;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.isSpotifyParty;
    var _closure1_slot4 = var9;
    var9 = 2;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.CRUNCHYROLL_CLIENT_ID;
    var _closure1_slot5 = var9;
    var9 = 7;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/content_inventory/matchUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var3['isSpotifyEntry'] = var8;
    var3['isCrunchyrollEntry'] = var7;
    var3['isMatchingApplicationActivity'] = var6;
    var3['isMatchingListeningActivity'] = var5;
    var3['isMatchingWatchActivity'] = var4;
    var2 = function findMatchingEntry(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var8 = arg1;
            var1 = arg2;
            var _closure2_slot0 = var1;
            var5 = var8.filter;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 6;
            var4 = var7[var4];
            var7 = undefined;
            var4 = var6.bind(var7)(var4);
            var4 = var4.isEntryActive;
            var5 = var5.bind(var8)(var4);
            var6 = var1.type;
            var4 = _closure1_slot3;
            var4 = var4.PLAYING;
            if(!(var6 !== var4)) { _fun0006_ip = 28; continue _fun0006 }
case 29:
            var6 = var1.type;
            var4 = _closure1_slot3;
            var4 = var4.LISTENING;
            if(!(var6 !== var4)) { _fun0006_ip = 30; continue _fun0006 }
case 31:
            var6 = var1.type;
            var1 = _closure1_slot3;
            var4 = var1.WATCHING;
            var1 = undefined;
            if(!(var6 === var4)) { _fun0006_ip = 32; continue _fun0006 }
case 33:
            var6 = var8.filter;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 3;
            var4 = var10[var4];
            var4 = var9.bind(var7)(var4);
            var4 = var4.isWatchedMediaEntry;
            var8 = var6.bind(var8)(var4);
            var6 = var8.find;
            var4 = function(arg1) {
                var4 = _closure1_slot10;
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var1 = var6.bind(var8)(var4);
case 32:
            _fun0006_ip = 6; continue _fun0006;
case 30:
            var6 = var5.filter;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 3;
            var4 = var9[var4];
            var4 = var8.bind(var7)(var4);
            var4 = var4.isListenedSessionEntry;
            var8 = var6.bind(var5)(var4);
            var6 = var8.find;
            var4 = function(arg1) {
                var4 = _closure1_slot9;
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var1 = var6.bind(var8)(var4);
case 6:
            _fun0006_ip = 34; continue _fun0006;
case 28:
            var4 = var5.filter;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 3;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.isGamingLikeEntry;
            var4 = var4.bind(var5)(var3);
            var3 = var4.find;
            var2 = function(arg1) {
                var4 = _closure1_slot8;
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 34:
            return var1;
        }
    };
    var3['findMatchingEntry'] = var2;
    return var1;
})();