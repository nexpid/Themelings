// app/modules/spotify/SpotifyConstants.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    _fun67443: for(var _fun67443_ip = 0; ; ) switch(_fun67443_ip) {
 0:
        verify = argBar;
        zulu = argFred;
        offset = argPlugh;
        romeo = global;
        oscar = romeo.Object;
        report = oscar.defineProperty;
        tango = {};
        entity = true;
        tango['value'] = entity;
        entity = '__esModule';
        entity = report.bind(oscar)(zulu, entity, tango);
        entity = 0;
        tango = offset[entity];
        entity = undefined;
        tango = verify.bind(entity)(tango);
        tango = tango.PlatformTypes;
        report = 1;
        oscar = offset[report];
        report = argBaz;
        oscar = report.bind(entity)(oscar);
        report = oscar.get;
        tango = tango.SPOTIFY;
        tango = report.bind(oscar)(tango);
        golf = tango.name;
        oscar = {};
        tango = 'track';
        oscar['TRACK'] = tango;
        tango = 'artist';
        oscar['ARTIST'] = tango;
        tango = 'album';
        oscar['ALBUM'] = tango;
        tango = 'playlist';
        oscar['PLAYLIST'] = tango;
        tango = 'episode';
        oscar['EPISODE'] = tango;
        tango = 'show';
        oscar['SHOW'] = tango;
        var _closure1_slot0 = oscar;
        report = {};
        tango = 'user_activity_play';
        report['USER_ACTIVITY_PLAY'] = tango;
        tango = 'user_activity_sync';
        report['USER_ACTIVITY_SYNC'] = tango;
        tango = 'embed_sync';
        report['EMBED_SYNC'] = tango;
        backup = function(argFoo) { // Original name: spotifyUtmParams
            entity = global;
            entity = entity.HermesInternal;
            zulu = entity.concat;
            mike = '?utm_source=discord&utm_medium=';
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            return entity;
        };
        var _closure1_slot1 = backup;
        yankee = romeo.Object;
        options = yankee.freeze;
        tango = {};
        foxtrot = romeo.HermesInternal;
        kilo = foxtrot.concat;
        output = '';
        sizing = 'https://api.spotify.com/v1';
        foxtrot = '/me';
        foxtrot = kilo.bind(output)(sizing, foxtrot);
        tango['PROFILE'] = foxtrot;
        foxtrot = romeo.HermesInternal;
        kilo = foxtrot.concat;
        foxtrot = '/me/notifications/player';
        foxtrot = kilo.bind(output)(sizing, foxtrot);
        tango['NOTIFICATIONS_PLAYER'] = foxtrot;
        foxtrot = romeo.HermesInternal;
        kilo = foxtrot.concat;
        foxtrot = '/me/player';
        foxtrot = kilo.bind(output)(sizing, foxtrot);
        tango['PLAYER'] = foxtrot;
        foxtrot = romeo.HermesInternal;
        kilo = foxtrot.concat;
        foxtrot = '/me/player/devices';
        foxtrot = kilo.bind(output)(sizing, foxtrot);
        tango['PLAYER_DEVICES'] = foxtrot;
        foxtrot = romeo.HermesInternal;
        kilo = foxtrot.concat;
        foxtrot = '/me/player/play';
        foxtrot = kilo.bind(output)(sizing, foxtrot);
        tango['PLAYER_PLAY'] = foxtrot;
        foxtrot = romeo.HermesInternal;
        kilo = foxtrot.concat;
        foxtrot = '/me/player/pause';
        foxtrot = kilo.bind(output)(sizing, foxtrot);
        tango['PLAYER_PAUSE'] = foxtrot;
        foxtrot = romeo.HermesInternal;
        kilo = foxtrot.concat;
        foxtrot = '/me/player/repeat';
        foxtrot = kilo.bind(output)(sizing, foxtrot);
        tango['PLAYER_REPEAT'] = foxtrot;
        foxtrot = function(argFoo, argBar) { // Original name: WEB_OPEN
            _fun67445: for(var _fun67445_ip = 0; ; ) switch(_fun67445_ip) {
 0:
                tango = arguments[2];
                zulu = undefined;
                if(!(tango === zulu)) { _fun67445_ip = 13; continue _fun67445 }
 9:
                tango = 'desktop';
 13:
                entity = global;
                report = entity.encodeURIComponent;
                mike = argFoo;
                oscar = report.bind(zulu)(mike);
                report = entity.encodeURIComponent;
                mike = argBar;
                options = report.bind(zulu)(mike);
                mike = _closure1_slot1;
                golf = mike.bind(zulu)(tango);
                entity = entity.HermesInternal;
                zulu = entity.concat;
                yankee = 'https://open.spotify.com/';
                verify = '/';
                offset = oscar;
                entity = yankee[zulu](offset, verify, options, golf, oscar);
                return entity;
            }
        };
        tango['WEB_OPEN'] = foxtrot;
        foxtrot = function(argFoo) { // Original name: EMBED
            _fun67446: for(var _fun67446_ip = 0; ; ) switch(_fun67446_ip) {
 0:
                zulu = arguments[1];
                mike = undefined;
                if(!(zulu === mike)) { _fun67446_ip = 13; continue _fun67446 }
 9:
                zulu = 'desktop';
 13:
                entity = _closure1_slot1;
                tango = entity.bind(mike)(zulu);
                entity = global;
                entity = entity.HermesInternal;
                zulu = entity.concat;
                mike = 'https://open.spotify.com/embed';
                entity = argFoo;
                entity = zulu.bind(mike)(entity, tango);
                return entity;
            }
        };
        tango['EMBED'] = foxtrot;
        foxtrot = function(argFoo, argBar) { // Original name: PLAYER_OPEN
            _fun67447: for(var _fun67447_ip = 0; ; ) switch(_fun67447_ip) {
 0:
                mike = arguments[2];
                options = arguments[3];
                zulu = undefined;
                if(!(mike === zulu)) { _fun67447_ip = 14; continue _fun67447 }
 12:
                mike = true;
 14:
                if(!(options === zulu)) { _fun67447_ip = 22; continue _fun67447 }
 18:
                options = 'desktop';
 22:
                entity = global;
                report = entity.encodeURIComponent;
                tango = argFoo;
                golf = report.bind(zulu)(tango);
                report = entity.encodeURIComponent;
                tango = argBar;
                oscar = report.bind(zulu)(tango);
                report = '';
                tango = report;
                if(!mike) { _fun67447_ip = 74; continue _fun67447 }
 62:
                mike = _closure1_slot1;
                tango = mike.bind(zulu)(options);
 74:
                entity = entity.HermesInternal;
                zulu = entity.concat;
                backup = 'spotify';
                entity = ':';
                kilo = report;
                foxtrot = entity;
                romeo = golf;
                yankee = entity;
                offset = oscar;
                verify = tango;
                entity = kilo[zulu](backup, foxtrot, romeo, yankee, offset, verify, options);
                return entity;
            }
        };
        tango['PLAYER_OPEN'] = foxtrot;
        foxtrot = 'desktop';
        backup = backup.bind(entity)(foxtrot);
        romeo = romeo.HermesInternal;
        foxtrot = romeo.concat;
        romeo = 'https://www.spotify.com/premium/';
        romeo = foxtrot.bind(romeo)(backup);
        tango['PREMIUM_SITE'] = romeo;
        romeo = function(argFoo) { // Original name: INSTALL_ATTRIBUTION
            entity = global;
            entity = entity.HermesInternal;
            zulu = entity.concat;
            mike = 'https://app.adjust.com/bdyga9?campaign=';
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            return entity;
        };
        tango['INSTALL_ATTRIBUTION'] = romeo;
        romeo = 2;
        romeo = offset[romeo];
        foxtrot = verify.bind(entity)(romeo);
        romeo = foxtrot.isAndroid;
        backup = romeo.bind(foxtrot)();
        romeo = 'https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8';
        foxtrot = romeo;
        if(!backup) { _fun67443_ip = 568; continue _fun67443 }
 562:
        foxtrot = 'https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US';
 568:
        tango['APP_STORE'] = foxtrot;
        tango['IOS_APP_STORE'] = romeo;
        tango = options.bind(yankee)(tango);
        options = 3;
        options = offset[options];
        offset = verify.bind(entity)(options);
        verify = offset.fileFinishedImporting;
        options = 'modules/spotify/SpotifyConstants.tsx';
        options = verify.bind(offset)(options);
        options = 'spotify';
        zulu['SPOTIFY_APP_PROTOCOL'] = options;
        options = 'spotify:';
        zulu['SPOTIFY_PARTY_PREFIX'] = options;
        zulu['SPOTIFY_PLATFORM_NAME'] = golf;
        golf = function(argFoo) { // Original name: isSpotifyParty
            _fun67449: for(var _fun67449_ip = 0; ; ) switch(_fun67449_ip) {
 0:
                tango = argFoo;
                entity = null;
                entity = entity != tango;
                if(!entity) { _fun67449_ip = 29; continue _fun67449 }
 12:
                zulu = tango.startsWith;
                mike = 'spotify:';
                entity = zulu.bind(tango)(mike);
 29:
                return entity;
            }
        };
        zulu['isSpotifyParty'] = golf;
        zulu['SpotifyResourceTypes'] = oscar;
        zulu['SpotifyActionTypes'] = report;
        report = ['open.spotify.com', 'www.spotify.com'];
        zulu['SPOTIFY_HOSTNAMES'] = report;
        zulu['SpotifyEndpoints'] = tango;
        mike = function(argFoo) { // Original name: getSpotifyResourceType
            _fun67450: for(var _fun67450_ip = 0; ; ) switch(_fun67450_ip) {
 0:
                mike = argFoo;
                zulu = 'string';
                entity = typeof mike;
                if(!(zulu === entity)) { _fun67450_ip = 166; continue _fun67450 }
 17:
                entity = 'track';
                if(!(entity !== mike)) { _fun67450_ip = 151; continue _fun67450 }
 28:
                entity = 'artist';
                if(!(entity !== mike)) { _fun67450_ip = 136; continue _fun67450 }
 36:
                entity = 'album';
                if(!(entity !== mike)) { _fun67450_ip = 121; continue _fun67450 }
 44:
                entity = 'playlist';
                if(!(entity !== mike)) { _fun67450_ip = 106; continue _fun67450 }
 54:
                entity = 'episode';
                if(!(entity !== mike)) { _fun67450_ip = 91; continue _fun67450 }
 64:
                entity = 'show';
                if(!(entity !== mike)) { _fun67450_ip = 76; continue _fun67450 }
 72:
                entity = null;
                return entity;
 76:
                entity = _closure1_slot0;
                entity = entity.SHOW;
                return entity;
 91:
                entity = _closure1_slot0;
                entity = entity.EPISODE;
                return entity;
 106:
                entity = _closure1_slot0;
                entity = entity.PLAYLIST;
                return entity;
 121:
                entity = _closure1_slot0;
                entity = entity.ALBUM;
                return entity;
 136:
                entity = _closure1_slot0;
                entity = entity.ARTIST;
                return entity;
 151:
                entity = _closure1_slot0;
                entity = entity.TRACK;
                return entity;
 166:
                entity = null;
                return entity;
            }
        };
        zulu['getSpotifyResourceType'] = mike;
        return entity;
    }
})();