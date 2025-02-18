// app/modules/spotify/SpotifyConstants.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        verify = argBar;
        zuuluu = argFre;
        offset = argPlu;
        romeon = global;
        oscard = romeon.Object;
        report = oscard.defineProperty;
        tangon = {};
        entity = true;
        tangon['value'] = entity;
        entity = '__esModule';
        entity = report.bind(oscard)(zuuluu, entity, tangon);
        entity = 0;
        tangon = offset[entity];
        entity = undefined;
        tangon = verify.bind(entity)(tangon);
        tangon = tangon.PlatformTypes;
        report = 1;
        oscard = offset[report];
        report = argBaz;
        oscard = report.bind(entity)(oscard);
        report = oscard.get;
        tangon = tangon.SPOTIFY;
        tangon = report.bind(oscard)(tangon);
        golfie = tangon.name;
        oscard = {};
        tangon = 'track';
        oscard['TRACK'] = tangon;
        tangon = 'artist';
        oscard['ARTIST'] = tangon;
        tangon = 'album';
        oscard['ALBUM'] = tangon;
        tangon = 'playlist';
        oscard['PLAYLIST'] = tangon;
        tangon = 'episode';
        oscard['EPISODE'] = tangon;
        tangon = 'show';
        oscard['SHOW'] = tangon;
        var _closure1_slot0 = oscard;
        report = {};
        tangon = 'user_activity_play';
        report['USER_ACTIVITY_PLAY'] = tangon;
        tangon = 'user_activity_sync';
        report['USER_ACTIVITY_SYNC'] = tangon;
        tangon = 'embed_sync';
        report['EMBED_SYNC'] = tangon;
        backup = function(argFoo) { // Original name: spotifyUtmParams
            entity = global;
            entity = entity.HermesInternal;
            zuuluu = entity.concat;
            michal = '?utm_source=discord&utm_medium=';
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        var _closure1_slot1 = backup;
        yankee = romeon.Object;
        option = yankee.freeze;
        tangon = {};
        foxtra = romeon.HermesInternal;
        kiloes = foxtra.concat;
        output = '';
        sizing = 'https://api.spotify.com/v1';
        foxtra = '/me';
        foxtra = kiloes.bind(output)(sizing, foxtra);
        tangon['PROFILE'] = foxtra;
        foxtra = romeon.HermesInternal;
        kiloes = foxtra.concat;
        foxtra = '/me/notifications/player';
        foxtra = kiloes.bind(output)(sizing, foxtra);
        tangon['NOTIFICATIONS_PLAYER'] = foxtra;
        foxtra = romeon.HermesInternal;
        kiloes = foxtra.concat;
        foxtra = '/me/player';
        foxtra = kiloes.bind(output)(sizing, foxtra);
        tangon['PLAYER'] = foxtra;
        foxtra = romeon.HermesInternal;
        kiloes = foxtra.concat;
        foxtra = '/me/player/devices';
        foxtra = kiloes.bind(output)(sizing, foxtra);
        tangon['PLAYER_DEVICES'] = foxtra;
        foxtra = romeon.HermesInternal;
        kiloes = foxtra.concat;
        foxtra = '/me/player/play';
        foxtra = kiloes.bind(output)(sizing, foxtra);
        tangon['PLAYER_PLAY'] = foxtra;
        foxtra = romeon.HermesInternal;
        kiloes = foxtra.concat;
        foxtra = '/me/player/pause';
        foxtra = kiloes.bind(output)(sizing, foxtra);
        tangon['PLAYER_PAUSE'] = foxtra;
        foxtra = romeon.HermesInternal;
        kiloes = foxtra.concat;
        foxtra = '/me/player/repeat';
        foxtra = kiloes.bind(output)(sizing, foxtra);
        tangon['PLAYER_REPEAT'] = foxtra;
        foxtra = function(argFoo, argBar) { // Original name: WEB_OPEN
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = arguments[2];
                zuuluu = undefined;
                if(!(tangon === zuuluu)) { _fun00004_ip = 13; continue _fun00003 }
 9:
                tangon = 'desktop';
 13:
                entity = global;
                report = entity.encodeURIComponent;
                michal = argFoo;
                oscard = report.bind(zuuluu)(michal);
                report = entity.encodeURIComponent;
                michal = argBar;
                option = report.bind(zuuluu)(michal);
                michal = _closure1_slot1;
                golfie = michal.bind(zuuluu)(tangon);
                entity = entity.HermesInternal;
                zuuluu = entity.concat;
                yankee = 'https://open.spotify.com/';
                verify = '/';
                offset = oscard;
                entity = yankee[zuuluu](offset, verify, option, golfie, oscard);
                return entity;
            }
        };
        tangon['WEB_OPEN'] = foxtra;
        foxtra = function(argFoo) { // Original name: EMBED
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = arguments[1];
                michal = undefined;
                if(!(zuuluu === michal)) { _fun00006_ip = 13; continue _fun00005 }
 9:
                zuuluu = 'desktop';
 13:
                entity = _closure1_slot1;
                tangon = entity.bind(michal)(zuuluu);
                entity = global;
                entity = entity.HermesInternal;
                zuuluu = entity.concat;
                michal = 'https://open.spotify.com/embed';
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity, tangon);
                return entity;
            }
        };
        tangon['EMBED'] = foxtra;
        foxtra = function(argFoo, argBar) { // Original name: PLAYER_OPEN
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = arguments[2];
                option = arguments[3];
                zuuluu = undefined;
                if(!(michal === zuuluu)) { _fun00008_ip = 14; continue _fun00007 }
 12:
                michal = true;
 14:
                if(!(option === zuuluu)) { _fun00008_ip = 22; continue _fun00007 }
 18:
                option = 'desktop';
 22:
                entity = global;
                report = entity.encodeURIComponent;
                tangon = argFoo;
                golfie = report.bind(zuuluu)(tangon);
                report = entity.encodeURIComponent;
                tangon = argBar;
                oscard = report.bind(zuuluu)(tangon);
                report = '';
                tangon = report;
                if(!michal) { _fun00008_ip = 74; continue _fun00007 }
 62:
                michal = _closure1_slot1;
                tangon = michal.bind(zuuluu)(option);
 74:
                entity = entity.HermesInternal;
                zuuluu = entity.concat;
                backup = 'spotify';
                entity = ':';
                kiloes = report;
                foxtra = entity;
                romeon = golfie;
                yankee = entity;
                offset = oscard;
                verify = tangon;
                entity = kiloes[zuuluu](backup, foxtra, romeon, yankee, offset, verify, option);
                return entity;
            }
        };
        tangon['PLAYER_OPEN'] = foxtra;
        foxtra = 'desktop';
        backup = backup.bind(entity)(foxtra);
        romeon = romeon.HermesInternal;
        foxtra = romeon.concat;
        romeon = 'https://www.spotify.com/premium/';
        romeon = foxtra.bind(romeon)(backup);
        tangon['PREMIUM_SITE'] = romeon;
        romeon = function(argFoo) { // Original name: INSTALL_ATTRIBUTION
            entity = global;
            entity = entity.HermesInternal;
            zuuluu = entity.concat;
            michal = 'https://app.adjust.com/bdyga9?campaign=';
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        tangon['INSTALL_ATTRIBUTION'] = romeon;
        romeon = 2;
        romeon = offset[romeon];
        foxtra = verify.bind(entity)(romeon);
        romeon = foxtra.isAndroid;
        backup = romeon.bind(foxtra)();
        romeon = 'https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8';
        foxtra = romeon;
        if(!backup) { _fun00002_ip = 558; continue _fun00001 }
 552:
        foxtra = 'https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US';
 558:
        tangon['APP_STORE'] = foxtra;
        tangon['IOS_APP_STORE'] = romeon;
        tangon = option.bind(yankee)(tangon);
        option = 3;
        option = offset[option];
        offset = verify.bind(entity)(option);
        verify = offset.fileFinishedImporting;
        option = 'modules/spotify/SpotifyConstants.tsx';
        option = verify.bind(offset)(option);
        option = 'spotify';
        zuuluu['SPOTIFY_APP_PROTOCOL'] = option;
        option = 'spotify:';
        zuuluu['SPOTIFY_PARTY_PREFIX'] = option;
        zuuluu['SPOTIFY_PLATFORM_NAME'] = golfie;
        golfie = function(argFoo) { // Original name: isSpotifyParty
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = argFoo;
                entity = null;
                entity = entity != tangon;
                if(!entity) { _fun00010_ip = 29; continue _fun00009 }
 12:
                zuuluu = tangon.startsWith;
                michal = 'spotify:';
                entity = zuuluu.bind(tangon)(michal);
 29:
                return entity;
            }
        };
        zuuluu['isSpotifyParty'] = golfie;
        zuuluu['SpotifyResourceTypes'] = oscard;
        zuuluu['SpotifyActionTypes'] = report;
        report = ['open.spotify.com', 'www.spotify.com'];
        zuuluu['SPOTIFY_HOSTNAMES'] = report;
        zuuluu['SpotifyEndpoints'] = tangon;
        michal = function(argFoo) { // Original name: getSpotifyResourceType
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = argFoo;
                zuuluu = 'string';
                entity = typeof michal;
                if(!(zuuluu === entity)) { _fun00012_ip = 166; continue _fun00011 }
 17:
                entity = 'track';
                if(!(entity !== michal)) { _fun00012_ip = 151; continue _fun00011 }
 28:
                entity = 'artist';
                if(!(entity !== michal)) { _fun00012_ip = 136; continue _fun00011 }
 36:
                entity = 'album';
                if(!(entity !== michal)) { _fun00012_ip = 121; continue _fun00011 }
 44:
                entity = 'playlist';
                if(!(entity !== michal)) { _fun00012_ip = 106; continue _fun00011 }
 54:
                entity = 'episode';
                if(!(entity !== michal)) { _fun00012_ip = 91; continue _fun00011 }
 64:
                entity = 'show';
                if(!(entity !== michal)) { _fun00012_ip = 76; continue _fun00011 }
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
        zuuluu['getSpotifyResourceType'] = michal;
        return entity;
    }
})();