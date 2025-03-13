// app/modules/recent_avatars/RecentAvatarUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = option;
    report = function(argFoo) { // Original name: getImageFormat
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.storageHash;
            entity = michal.canAnimate;
            golfie = undefined;
            if(!(entity === golfie)) { _fun00002_ip = 23; continue _fun00001 }
 21:
            entity = false;
 23:
            tangon = michal.allowWebp;
            if(!(tangon === golfie)) { _fun00002_ip = 35; continue _fun00001 }
 33:
            tangon = true;
 35:
            if(!entity) { _fun00002_ip = 81; continue _fun00001 }
 38:
            michal = _closure1_slot0;
            report = _closure1_slot2;
            entity = 2;
            entity = report[entity];
            michal = michal.bind(golfie)(entity);
            entity = michal.isAnimatedIconHash;
            michal = entity.bind(michal)(zuuluu);
            entity = 'gif';
            if(michal) { _fun00002_ip = 175; continue _fun00001 }
 81:
            michal = global;
            michal = michal.window;
            michal = michal.GLOBAL_ENV;
            zuuluu = michal.CDN_HOST;
            michal = null;
            zuuluu = michal == zuuluu;
            michal = 'jpg';
            if(zuuluu) { _fun00002_ip = 172; continue _fun00001 }
 116:
            report = 'png';
            zuuluu = report;
            if(!tangon) { _fun00002_ip = 169; continue _fun00001 }
 128:
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            tangon = 2;
            tangon = option[tangon];
            tangon = oscard.bind(golfie)(tangon);
            tangon = tangon.SUPPORTS_WEBP;
            zuuluu = report;
            if(!tangon) { _fun00002_ip = 169; continue _fun00001 }
 163:
            zuuluu = 'webp';
 169:
            michal = zuuluu;
 172:
            entity = michal;
 175:
            return entity;
        }
    };
    var _closure1_slot6 = report;
    tangon = function(argFoo) { // Original name: getArchivedAvatarURL
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            verify = entity.userId;
            option = entity.avatarId;
            golfie = entity.storageHash;
            offset = entity.canAnimate;
            sizing = undefined;
            if(!(offset === sizing)) { _fun00004_ip = 34; continue _fun00003 }
 32:
            offset = false;
 34:
            oscard = entity.allowWebp;
            if(!(oscard === sizing)) { _fun00004_ip = 46; continue _fun00003 }
 44:
            oscard = true;
 46:
            backup = entity.size;
            entity = global;
            michal = entity.window;
            michal = michal.GLOBAL_ENV;
            romeon = michal.CDN_HOST;
            michal = null;
            if(!(michal == romeon)) { _fun00004_ip = 113; continue _fun00003 }
 77:
            michal = entity.location;
            zuuluu = michal.protocol;
            michal = entity.window;
            michal = michal.GLOBAL_ENV;
            michal = michal.API_ENDPOINT;
            report = zuuluu + michal;
            _fun00004_ip = 153; continue _fun00003;
 113:
            michal = entity.location;
            yankee = michal.protocol;
            michal = entity.HermesInternal;
            tangon = michal.concat;
            zuuluu = '';
            michal = '//';
            report = tangon.bind(zuuluu)(yankee, michal, romeon);
 153:
            tangon = _closure1_slot6;
            zuuluu = {};
            zuuluu['storageHash'] = golfie;
            zuuluu['canAnimate'] = offset;
            zuuluu['allowWebp'] = oscard;
            result = tangon.bind(sizing)(zuuluu);
            tangon = _closure1_slot1;
            output = _closure1_slot2;
            zuuluu = 3;
            zuuluu = output[zuuluu];
            offset = tangon.bind(sizing)(zuuluu);
            tangon = offset.stringify;
            zuuluu = {};
            kiloes = _closure1_slot0;
            yankee = 4;
            romeon = output[yankee];
            foxtra = kiloes.bind(sizing)(romeon);
            romeon = foxtra.getBestMediaProxySize;
            yankee = output[yankee];
            kiloes = kiloes.bind(sizing)(yankee);
            yankee = kiloes.getDevicePixelRatio;
            yankee = yankee.bind(kiloes)();
            yankee = backup * yankee;
            yankee = romeon.bind(foxtra)(yankee);
            zuuluu['size'] = yankee;
            offset = tangon.bind(offset)(zuuluu);
            zuuluu = entity.HermesInternal;
            tangon = zuuluu.concat;
            zuuluu = '?';
            tangon = tangon.bind(zuuluu)(offset);
            zuuluu = _closure1_slot3;
            michal = zuuluu.ARCHIVED_AVATAR;
            ctrled = zuuluu;
            source = verify;
            update = option;
            echoed = golfie;
            zuuluu = ctrled[michal](source, update, echoed, result, output);
            entity = entity.HermesInternal;
            michal = entity.concat;
            entity = '';
            entity = michal.bind(entity)(report, zuuluu, tangon);
            return entity;
        }
    };
    var _closure1_slot7 = tangon;
    entity = function(argFoo) { // Original name: getFileTypeFromExtension
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = 'gif';
            if(!(entity !== tangon)) { _fun00006_ip = 87; continue _fun00005 }
 13:
            entity = 'png';
            if(!(entity !== tangon)) { _fun00006_ip = 79; continue _fun00005 }
 23:
            entity = 'jpg';
            if(!(entity !== tangon)) { _fun00006_ip = 71; continue _fun00005 }
 33:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.assertNever;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
 71:
            entity = 'image/jpeg';
            return entity;
 79:
            entity = 'image/png';
            return entity;
 87:
            entity = 'image/gif';
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.Endpoints;
    var _closure1_slot3 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.MAX_NUMBER_AVAILABLE_RECENT_AVATARS_WITH_PREMIUM;
    var _closure1_slot4 = verify;
    oscard = oscard.MAX_NUMBER_AVAILABLE_RECENT_AVATARS_WITHOUT_PREMIUM;
    var _closure1_slot5 = oscard;
    oscard = 8;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/recent_avatars/RecentAvatarUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['getImageFormat'] = report;
    zuuluu['getArchivedAvatarURL'] = tangon;
    tangon = function(argFoo) { // Original name: getRecentAvatarsLimit
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            if(entity) { _fun00008_ip = 15; continue _fun00007 }
 9:
            zuuluu = _closure1_slot5;
            _fun00008_ip = 19; continue _fun00007;
 15:
            zuuluu = _closure1_slot4;
 19:
            entity = {};
            entity['recentAvatarsLimit'] = zuuluu;
            michal = _closure1_slot4;
            michal = michal - zuuluu;
            entity['numberOfLockedAvatarSlots'] = michal;
            return entity;
        }
    };
    zuuluu['getRecentAvatarsLimit'] = tangon;
    tangon = function(argFoo) { // Original name: generateAvatarDescription
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            entity = null;
            if(!(entity == michal)) { _fun00010_ip = 11; continue _fun00009 }
 9:
            michal = {};
 11:
            report = michal.filename;
            tangon = michal.assetOrigin;
            golfie = undefined;
            if(!(golfie === tangon)) { _fun00010_ip = 64; continue _fun00009 }
 29:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 6;
            michal = oscard[michal];
            michal = zuuluu.bind(golfie)(michal);
            michal = michal.AssetOriginTypes;
            tangon = michal.NEW_ASSET;
 64:
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 6;
            zuuluu = option[zuuluu];
            zuuluu = oscard.bind(golfie)(zuuluu);
            zuuluu = zuuluu.AssetOriginTypes;
            zuuluu = zuuluu.ARCHIVED_ASSET;
            if(!(tangon === zuuluu)) { _fun00010_ip = 105; continue _fun00009 }
 103:
            return golfie;
 105:
            if(!(entity == report)) { _fun00010_ip = 164; continue _fun00009 }
 109:
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            entity = 5;
            zuuluu = option[entity];
            zuuluu = oscard.bind(golfie)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            entity = option[entity];
            entity = oscard.bind(golfie)(entity);
            entity = entity.t;
            entity = entity.lqaIxM;
            report = zuuluu.bind(tangon)(entity);
 164:
            entity = global;
            zuuluu = entity.Date;
            tangon = zuuluu.prototype;
            tangon = Object.create(tangon, {constructor: {value: zuuluu}});
            romeon = tangon;
            zuuluu = new romeon[zuuluu](yankee);
            oscard = zuuluu instanceof Object ? zuuluu : tangon;
            tangon = oscard.toLocaleString;
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 5;
            michal = option[michal];
            michal = zuuluu.bind(golfie)(michal);
            michal = michal.intl;
            zuuluu = michal.currentLocale;
            michal = {'year': 'numeric', 'day': 'numeric', 'month': 'long', 'hour': 'numeric', 'minute': 'numeric'};
            tangon = tangon.bind(oscard)(zuuluu, michal);
            entity = entity.HermesInternal;
            zuuluu = entity.concat;
            michal = '';
            entity = ', ';
            entity = zuuluu.bind(michal)(report, entity, tangon);
            return entity;
        }
    };
    zuuluu['generateAvatarDescription'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: generateRecentAvatarFileDetails
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            golfie = argBar;
            zuuluu = _closure1_slot6;
            entity = {'storageHash': null, 'canAnimate': true, 'allowWebp': false};
            tangon = argFoo;
            entity['storageHash'] = tangon;
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = {};
            report = null;
            if(!(report != golfie)) { _fun00012_ip = 66; continue _fun00011 }
 44:
            oscard = golfie.split;
            report = ',';
            oscard = oscard.bind(golfie)(report);
            report = 0;
            option = oscard[report];
            _fun00012_ip = 121; continue _fun00011;
 66:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            report = 5;
            oscard = offset[report];
            oscard = verify.bind(tangon)(oscard);
            golfie = oscard.intl;
            oscard = golfie.string;
            report = offset[report];
            report = verify.bind(tangon)(report);
            report = report.t;
            report = report.lqaIxM;
            option = oscard.bind(golfie)(report);
 121:
            report = global;
            report = report.HermesInternal;
            golfie = report.concat;
            oscard = '';
            report = '.';
            report = golfie.bind(oscard)(option, report, zuuluu);
            entity['filename'] = report;
            michal = _closure1_slot8;
            michal = michal.bind(tangon)(zuuluu);
            entity['type'] = michal;
            return entity;
        }
    };
    zuuluu['generateRecentAvatarFileDetails'] = tangon;
    tangon = function(argFoo) { // Original name: createPendingImage
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            report = argFoo;
            tangon = report.assetOrigin;
            entity = undefined;
            if(!(tangon === entity)) { _fun00014_ip = 50; continue _fun00013 }
 15:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 6;
            michal = oscard[michal];
            michal = zuuluu.bind(entity)(michal);
            michal = michal.AssetOriginTypes;
            tangon = michal.NEW_ASSET;
 50:
            zuuluu = report.imageUri;
            michal = report.description;
            report = report.originalAsset;
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            verify = 6;
            golfie = golfie[verify];
            golfie = option.bind(entity)(golfie);
            golfie = golfie.AssetOriginTypes;
            golfie = golfie.NEW_ASSET;
            if(!(golfie !== tangon)) { _fun00014_ip = 250; continue _fun00013 }
 109:
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[verify];
            golfie = option.bind(entity)(golfie);
            golfie = golfie.AssetOriginTypes;
            golfie = golfie.EDITED_ARCHIVED_ASSET;
            if(!(golfie !== tangon)) { _fun00014_ip = 227; continue _fun00013 }
 142:
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[verify];
            golfie = option.bind(entity)(golfie);
            golfie = golfie.AssetOriginTypes;
            golfie = golfie.ARCHIVED_ASSET;
            if(!(golfie !== tangon)) { _fun00014_ip = 208; continue _fun00013 }
 175:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            oscard = 7;
            oscard = option[oscard];
            golfie = golfie.bind(entity)(oscard);
            oscard = golfie.assertNever;
            oscard = oscard.bind(golfie)(tangon);
            return entity;
 208:
            entity = {};
            entity['assetOrigin'] = tangon;
            entity['imageUri'] = zuuluu;
            entity['originalAsset'] = report;
            return entity;
 227:
            entity = {};
            entity['assetOrigin'] = tangon;
            entity['imageUri'] = zuuluu;
            entity['description'] = michal;
            entity['originalAsset'] = report;
            return entity;
 250:
            entity = {};
            entity['assetOrigin'] = tangon;
            entity['imageUri'] = zuuluu;
            entity['description'] = michal;
            return entity;
        }
    };
    zuuluu['createPendingImage'] = tangon;
    michal = function(argFoo) { // Original name: getPendingAvatarSrc
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            verify = entity.userId;
            option = entity.image;
            golfie = entity.size;
            report = undefined;
            if(!(golfie === report)) { _fun00016_ip = 28; continue _fun00015 }
 25:
            golfie = 80;
 28:
            oscard = entity.canAnimate;
            if(!(oscard === report)) { _fun00016_ip = 40; continue _fun00015 }
 38:
            oscard = true;
 40:
            michal = null;
            entity = option;
            if(!(michal != option)) { _fun00016_ip = 186; continue _fun00015 }
 52:
            zuuluu = 'string';
            michal = typeof option;
            entity = option;
            if(!(zuuluu !== michal)) { _fun00016_ip = 186; continue _fun00015 }
 66:
            tangon = option.assetOrigin;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            michal = 6;
            michal = yankee[michal];
            michal = offset.bind(report)(michal);
            michal = michal.AssetOriginTypes;
            michal = michal.ARCHIVED_ASSET;
            if(!(tangon !== michal)) { _fun00016_ip = 119; continue _fun00015 }
 111:
            michal = option.imageUri;
            _fun00016_ip = 183; continue _fun00015;
 119:
            tangon = _closure1_slot7;
            zuuluu = {};
            zuuluu['userId'] = verify;
            verify = option.originalAsset;
            verify = verify.id;
            zuuluu['avatarId'] = verify;
            option = option.originalAsset;
            option = option.storageHash;
            zuuluu['storageHash'] = option;
            zuuluu['size'] = golfie;
            zuuluu['canAnimate'] = oscard;
            oscard = false;
            zuuluu['allowWebp'] = oscard;
            michal = tangon.bind(report)(zuuluu);
 183:
            entity = michal;
 186:
            return entity;
        }
    };
    zuuluu['getPendingAvatarSrc'] = michal;
    return entity;
})();