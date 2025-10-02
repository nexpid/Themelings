// app/modules/content_inventory/ContentInventoryTypes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var14 = require;
    var3 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var14;
    var _closure1_slot1 = var13;
    var12 = function isPlayedGameEntry(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            var3 = var2 == var1;
            var4 = undefined;
            var2 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var1.content_type;
case 2:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 0;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ContentInventoryEntryType;
            var1 = var1.PLAYED_GAME;
            var1 = var2 === var1;
            return var1;
        }
    };
    var _closure1_slot2 = var12;
    var11 = function isTopGameEntry(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            var3 = var2 == var1;
            var4 = undefined;
            var2 = undefined;
            if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var2 = var1.content_type;
case 2:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 0;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ContentInventoryEntryType;
            var1 = var1.TOP_GAME;
            var1 = var2 === var1;
            return var1;
        }
    };
    var _closure1_slot3 = var11;
    var10 = function isGamingLikeEntry(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot2;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0003_ip = 4; continue _fun0003 }
case 5:
            var2 = _closure1_slot3;
            var1 = var2.bind(var3)(var4);
case 4:
            return var1;
        }
    };
    var _closure1_slot4 = var10;
    var9 = function isApplicationEntry(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var4 = null;
            var5 = var4 == var2;
            var1 = undefined;
            if(var5) { _fun0004_ip = 5; continue _fun0004 }
case 6:
            var1 = var2.extra;
case 5:
            var1 = var4 != var1;
            if(!var1) { _fun0004_ip = 7; continue _fun0004 }
case 8:
            var4 = var4 == var2;
            var3 = undefined;
            if(var4) { _fun0004_ip = 9; continue _fun0004 }
case 10:
            var3 = var2.extra;
case 9:
            var2 = 'application_id';
            var1 = var2 in var3;
case 7:
            return var1;
        }
    };
    var _closure1_slot5 = var9;
    var8 = function isListenedSessionEntry(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            var3 = var2 == var1;
            var4 = undefined;
            var2 = undefined;
            if(var3) { _fun0005_ip = 2; continue _fun0005 }
case 3:
            var2 = var1.content_type;
case 2:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 0;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ContentInventoryEntryType;
            var1 = var1.LISTENED_SESSION;
            var1 = var2 === var1;
            return var1;
        }
    };
    var _closure1_slot6 = var8;
    var7 = function isTopArtistEntry(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            var3 = var2 == var1;
            var4 = undefined;
            var2 = undefined;
            if(var3) { _fun0006_ip = 2; continue _fun0006 }
case 3:
            var2 = var1.content_type;
case 2:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 0;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ContentInventoryEntryType;
            var1 = var1.TOP_ARTIST;
            var1 = var2 === var1;
            return var1;
        }
    };
    var _closure1_slot7 = var7;
    var6 = function isWatchedMediaEntry(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            var3 = var2 == var1;
            var4 = undefined;
            var2 = undefined;
            if(var3) { _fun0007_ip = 2; continue _fun0007 }
case 3:
            var2 = var1.content_type;
case 2:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 0;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ContentInventoryEntryType;
            var1 = var1.WATCHED_MEDIA;
            var1 = var2 === var1;
            return var1;
        }
    };
    var _closure1_slot8 = var6;
    var5 = function isXboxEntry(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot4;
            var5 = undefined;
            var4 = var1.bind(var5)(var3);
            var1 = !var4;
            var1 = !var1;
            if(!var4) { _fun0008_ip = 11; continue _fun0008 }
case 12:
            var3 = var3.extra;
            var3 = var3.platform;
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 1;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.PlatformType;
            var2 = var2.XBOX;
            var1 = var3 === var2;
case 11:
            return var1;
        }
    };
    var _closure1_slot9 = var5;
    var4 = function isPlaystationEntry(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot4;
            var5 = undefined;
            var4 = var1.bind(var5)(var3);
            var1 = !var4;
            var1 = !var1;
            if(!var4) { _fun0009_ip = 11; continue _fun0009 }
case 12:
            var3 = var3.extra;
            var3 = var3.platform;
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 1;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.PlatformType;
            var2 = var2.PLAYSTATION;
            var1 = var3 === var2;
case 11:
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var1 = global;
    var17 = var1.Object;
    var16 = var17.defineProperty;
    var15 = {};
    var1 = true;
    var15['value'] = var1;
    var1 = '__esModule';
    var1 = var16.bind(var17)(var3, var1, var15);
    var1 = 2;
    var13 = var13[var1];
    var1 = undefined;
    var15 = var14.bind(var1)(var13);
    var14 = var15.fileFinishedImporting;
    var13 = 'modules/content_inventory/ContentInventoryTypes.tsx';
    var13 = var14.bind(var15)(var13);
    var3['isPlayedGameEntry'] = var12;
    var3['isTopGameEntry'] = var11;
    var3['isGamingLikeEntry'] = var10;
    var3['isApplicationEntry'] = var9;
    var3['isListenedSessionEntry'] = var8;
    var3['isTopArtistEntry'] = var7;
    var7 = function isListeningLikeEntry(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot6;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0010_ip = 4; continue _fun0010 }
case 5:
            var2 = _closure1_slot7;
            var1 = var2.bind(var3)(var4);
case 4:
            return var1;
        }
    };
    var3['isListeningLikeEntry'] = var7;
    var3['isWatchedMediaEntry'] = var6;
    var3['isXboxEntry'] = var5;
    var3['isPlaystationEntry'] = var4;
    var4 = function isConsoleEntry(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot9;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0011_ip = 4; continue _fun0011 }
case 5:
            var2 = _closure1_slot10;
            var1 = var2.bind(var3)(var4);
case 4:
            return var1;
        }
    };
    var3['isConsoleEntry'] = var4;
    var4 = function isLaunchedActivityEntry(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            var3 = var2 == var1;
            var4 = undefined;
            var2 = undefined;
            if(var3) { _fun0012_ip = 2; continue _fun0012 }
case 3:
            var2 = var1.content_type;
case 2:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 0;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ContentInventoryEntryType;
            var1 = var1.LAUNCHED_ACTIVITY;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['isLaunchedActivityEntry'] = var4;
    var2 = function isRecentActivityEntry(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot4;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0013_ip = 4; continue _fun0013 }
case 5:
            var5 = _closure1_slot6;
            var1 = var5.bind(var3)(var4);
case 4:
            if(var1) { _fun0013_ip = 13; continue _fun0013 }
case 14:
            var5 = _closure1_slot8;
            var1 = var5.bind(var3)(var4);
case 13:
            if(var1) { _fun0013_ip = 15; continue _fun0013 }
case 16:
            var2 = _closure1_slot5;
            var1 = var2.bind(var3)(var4);
case 15:
            return var1;
        }
    };
    var3['isRecentActivityEntry'] = var2;
    return var1;
})();