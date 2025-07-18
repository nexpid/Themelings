// app/modules/spotify/SpotifyConstants.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var9 = native2;
        var3 = native6;
        var10 = native7;
        var12 = global;
        var6 = var12.Object;
        var5 = var6.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var5.bind(var6)(var3, var1, var4);
        var1 = 0;
        var4 = var10[var1];
        var1 = undefined;
        var4 = var9.bind(var1)(var4);
        var4 = var4.PlatformTypes;
        var5 = 1;
        var6 = var10[var5];
        var5 = native3;
        var6 = var5.bind(var1)(var6);
        var5 = var6.get;
        var4 = var4.SPOTIFY;
        var4 = var5.bind(var6)(var4);
        var7 = var4.name;
        var6 = {};
        var4 = 'track';
        var6['TRACK'] = var4;
        var4 = 'artist';
        var6['ARTIST'] = var4;
        var4 = 'album';
        var6['ALBUM'] = var4;
        var4 = 'playlist';
        var6['PLAYLIST'] = var4;
        var4 = 'episode';
        var6['EPISODE'] = var4;
        var4 = 'show';
        var6['SHOW'] = var4;
        var _closure1_slot0 = var6;
        var5 = {};
        var4 = 'user_activity_play';
        var5['USER_ACTIVITY_PLAY'] = var4;
        var4 = 'user_activity_sync';
        var5['USER_ACTIVITY_SYNC'] = var4;
        var4 = 'embed_sync';
        var5['EMBED_SYNC'] = var4;
        var14 = function spotifyUtmParams(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '?utm_source=discord&utm_medium=';
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var _closure1_slot1 = var14;
        var11 = var12.Object;
        var8 = var11.freeze;
        var4 = {};
        var13 = var12.HermesInternal;
        var15 = var13.concat;
        var17 = '';
        var16 = 'https://api.spotify.com/v1';
        var13 = '/me';
        var13 = var15.bind(var17)(var16, var13);
        var4['PROFILE'] = var13;
        var13 = var12.HermesInternal;
        var15 = var13.concat;
        var13 = '/me/notifications/player';
        var13 = var15.bind(var17)(var16, var13);
        var4['NOTIFICATIONS_PLAYER'] = var13;
        var13 = var12.HermesInternal;
        var15 = var13.concat;
        var13 = '/me/player';
        var13 = var15.bind(var17)(var16, var13);
        var4['PLAYER'] = var13;
        var13 = var12.HermesInternal;
        var15 = var13.concat;
        var13 = '/me/player/devices';
        var13 = var15.bind(var17)(var16, var13);
        var4['PLAYER_DEVICES'] = var13;
        var13 = var12.HermesInternal;
        var15 = var13.concat;
        var13 = '/me/player/play';
        var13 = var15.bind(var17)(var16, var13);
        var4['PLAYER_PLAY'] = var13;
        var13 = var12.HermesInternal;
        var15 = var13.concat;
        var13 = '/me/player/pause';
        var13 = var15.bind(var17)(var16, var13);
        var4['PLAYER_PAUSE'] = var13;
        var13 = var12.HermesInternal;
        var15 = var13.concat;
        var13 = '/me/player/repeat';
        var13 = var15.bind(var17)(var16, var13);
        var4['PLAYER_REPEAT'] = var13;
        var13 = function WEB_OPEN(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = arguments[2];
                var3 = undefined;
                if(!(var4 === var3)) { _fun0002_ip = 13; continue _fun0002 }
 9:
                var4 = 'desktop';
 13:
                var1 = global;
                var5 = var1.encodeURIComponent;
                var2 = arg1;
                var6 = var5.bind(var3)(var2);
                var5 = var1.encodeURIComponent;
                var2 = arg2;
                var8 = var5.bind(var3)(var2);
                var2 = _closure1_slot1;
                var7 = var2.bind(var3)(var4);
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var11 = 'https://open.spotify.com/';
                var9 = '/';
                var10 = var6;
                var1 = var11[var3](var10, var9, var8, var7, var6);
                return var1;
            }
        };
        var4['WEB_OPEN'] = var13;
        var13 = function EMBED(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = arguments[1];
                var2 = undefined;
                if(!(var3 === var2)) { _fun0003_ip = 13; continue _fun0003 }
 9:
                var3 = 'desktop';
 13:
                var1 = _closure1_slot1;
                var4 = var1.bind(var2)(var3);
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = 'https://open.spotify.com/embed';
                var1 = arg1;
                var1 = var3.bind(var2)(var1, var4);
                return var1;
            }
        };
        var4['EMBED'] = var13;
        var13 = function PLAYER_OPEN(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = arguments[2];
                var8 = arguments[3];
                var3 = undefined;
                if(!(var2 === var3)) { _fun0004_ip = 14; continue _fun0004 }
 12:
                var2 = true;
 14:
                if(!(var8 === var3)) { _fun0004_ip = 22; continue _fun0004 }
 18:
                var8 = 'desktop';
 22:
                var1 = global;
                var5 = var1.encodeURIComponent;
                var4 = arg1;
                var7 = var5.bind(var3)(var4);
                var5 = var1.encodeURIComponent;
                var4 = arg2;
                var6 = var5.bind(var3)(var4);
                var5 = '';
                var4 = var5;
                if(!var2) { _fun0004_ip = 74; continue _fun0004 }
 62:
                var2 = _closure1_slot1;
                var4 = var2.bind(var3)(var8);
 74:
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var14 = 'spotify';
                var1 = ':';
                var15 = var5;
                var13 = var1;
                var12 = var7;
                var11 = var1;
                var10 = var6;
                var9 = var4;
                var1 = var15[var3](var14, var13, var12, var11, var10, var9, var8);
                return var1;
            }
        };
        var4['PLAYER_OPEN'] = var13;
        var13 = 'desktop';
        var14 = var14.bind(var1)(var13);
        var12 = var12.HermesInternal;
        var13 = var12.concat;
        var12 = 'https://www.spotify.com/premium/';
        var12 = var13.bind(var12)(var14);
        var4['PREMIUM_SITE'] = var12;
        var12 = function INSTALL_ATTRIBUTION(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = 'https://app.adjust.com/bdyga9?campaign=';
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var4['INSTALL_ATTRIBUTION'] = var12;
        var12 = 2;
        var12 = var10[var12];
        var13 = var9.bind(var1)(var12);
        var12 = var13.isAndroid;
        var14 = var12.bind(var13)();
        var12 = 'https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8';
        var13 = var12;
        if(!var14) { _fun0001_ip = 558; continue _fun0001 }
 552:
        var13 = 'https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US';
 558:
        var4['APP_STORE'] = var13;
        var4['IOS_APP_STORE'] = var12;
        var4 = var8.bind(var11)(var4);
        var8 = 3;
        var8 = var10[var8];
        var10 = var9.bind(var1)(var8);
        var9 = var10.fileFinishedImporting;
        var8 = 'modules/spotify/SpotifyConstants.tsx';
        var8 = var9.bind(var10)(var8);
        var8 = 'spotify';
        var3['SPOTIFY_APP_PROTOCOL'] = var8;
        var8 = 'spotify:';
        var3['SPOTIFY_PARTY_PREFIX'] = var8;
        var3['SPOTIFY_PLATFORM_NAME'] = var7;
        var7 = function isSpotifyParty(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = arg1;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0005_ip = 29; continue _fun0005 }
 12:
                var3 = var4.startsWith;
                var2 = 'spotify:';
                var1 = var3.bind(var4)(var2);
 29:
                return var1;
            }
        };
        var3['isSpotifyParty'] = var7;
        var3['SpotifyResourceTypes'] = var6;
        var3['SpotifyActionTypes'] = var5;
        var5 = ['open.spotify.com', 'www.spotify.com'];
        var3['SPOTIFY_HOSTNAMES'] = var5;
        var3['SpotifyEndpoints'] = var4;
        var2 = function getSpotifyResourceType(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = arg1;
                var3 = 'string';
                var1 = typeof var2;
                if(!(var3 === var1)) { _fun0006_ip = 166; continue _fun0006 }
 17:
                var1 = 'track';
                if(!(var1 !== var2)) { _fun0006_ip = 151; continue _fun0006 }
 28:
                var1 = 'artist';
                if(!(var1 !== var2)) { _fun0006_ip = 136; continue _fun0006 }
 36:
                var1 = 'album';
                if(!(var1 !== var2)) { _fun0006_ip = 121; continue _fun0006 }
 44:
                var1 = 'playlist';
                if(!(var1 !== var2)) { _fun0006_ip = 106; continue _fun0006 }
 54:
                var1 = 'episode';
                if(!(var1 !== var2)) { _fun0006_ip = 91; continue _fun0006 }
 64:
                var1 = 'show';
                if(!(var1 !== var2)) { _fun0006_ip = 76; continue _fun0006 }
 72:
                var1 = null;
                return var1;
 76:
                var1 = _closure1_slot0;
                var1 = var1.SHOW;
                return var1;
 91:
                var1 = _closure1_slot0;
                var1 = var1.EPISODE;
                return var1;
 106:
                var1 = _closure1_slot0;
                var1 = var1.PLAYLIST;
                return var1;
 121:
                var1 = _closure1_slot0;
                var1 = var1.ALBUM;
                return var1;
 136:
                var1 = _closure1_slot0;
                var1 = var1.ARTIST;
                return var1;
 151:
                var1 = _closure1_slot0;
                var1 = var1.TRACK;
                return var1;
 166:
                var1 = null;
                return var1;
            }
        };
        var3['getSpotifyResourceType'] = var2;
        return var1;
    }
})();