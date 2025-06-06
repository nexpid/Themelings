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
            entity = 1;
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
            tangon = 1;
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
    var _closure1_slot4 = report;
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
            tangon = michal.CDN_HOST;
            michal = null;
            if(!(michal == tangon)) { _fun00004_ip = 113; continue _fun00003 }
 77:
            michal = entity.location;
            zuuluu = michal.protocol;
            michal = entity.window;
            michal = michal.GLOBAL_ENV;
            michal = michal.API_ENDPOINT;
            report = zuuluu + michal;
            _fun00004_ip = 135; continue _fun00003;
 113:
            michal = entity.HermesInternal;
            zuuluu = michal.concat;
            michal = 'https://';
            report = zuuluu.bind(michal)(tangon);
 135:
            tangon = _closure1_slot4;
            zuuluu = {};
            zuuluu['storageHash'] = golfie;
            zuuluu['canAnimate'] = offset;
            zuuluu['allowWebp'] = oscard;
            result = tangon.bind(sizing)(zuuluu);
            tangon = _closure1_slot1;
            output = _closure1_slot2;
            zuuluu = 2;
            zuuluu = output[zuuluu];
            offset = tangon.bind(sizing)(zuuluu);
            tangon = offset.stringify;
            zuuluu = {};
            kiloes = _closure1_slot0;
            yankee = 3;
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
    var _closure1_slot5 = tangon;
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
            entity = 6;
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
    var _closure1_slot6 = entity;
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
    oscard = 7;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/recent_avatars/RecentAvatarUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['getImageFormat'] = report;
    zuuluu['getArchivedAvatarURL'] = tangon;
    tangon = function(argFoo) { // Original name: generateAvatarDescription
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            michal = null;
            if(!(michal == entity)) { _fun00008_ip = 11; continue _fun00007 }
 9:
            entity = {};
 11:
            oscard = entity.filename;
            golfie = entity.assetOrigin;
            option = undefined;
            if(!(option === golfie)) { _fun00008_ip = 64; continue _fun00007 }
 29:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 5;
            entity = tangon[entity];
            entity = zuuluu.bind(option)(entity);
            entity = entity.AssetOriginTypes;
            golfie = entity.NEW_ASSET;
 64:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            yankee = 5;
            zuuluu = zuuluu[yankee];
            zuuluu = tangon.bind(option)(zuuluu);
            zuuluu = zuuluu.AssetOriginTypes;
            zuuluu = zuuluu.ARCHIVED_ASSET;
            if(!(golfie === zuuluu)) { _fun00008_ip = 105; continue _fun00007 }
 103:
            return option;
 105:
            if(!(michal == oscard)) { _fun00008_ip = 164; continue _fun00007 }
 109:
            report = _closure1_slot0;
            verify = _closure1_slot2;
            michal = 4;
            zuuluu = verify[michal];
            zuuluu = report.bind(option)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = verify[michal];
            michal = report.bind(option)(michal);
            michal = michal.t;
            michal = michal.lqaIxM;
            oscard = zuuluu.bind(tangon)(michal);
 164:
            michal = global;
            michal = michal.Date;
            zuuluu = michal.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
            kiloes = zuuluu;
            michal = new kiloes[michal](backup);
            romeon = michal instanceof Object ? michal : zuuluu;
            report = romeon.toLocaleString;
            offset = _closure1_slot0;
            michal = _closure1_slot2;
            verify = 4;
            zuuluu = michal[verify];
            zuuluu = offset.bind(option)(zuuluu);
            zuuluu = zuuluu.intl;
            tangon = zuuluu.currentLocale;
            zuuluu = {'year': 'numeric', 'day': 'numeric', 'month': 'long', 'hour': 'numeric', 'minute': 'numeric'};
            report = report.bind(romeon)(tangon, zuuluu);
            zuuluu = michal[verify];
            zuuluu = offset.bind(option)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.formatToPlainString;
            michal = michal[yankee];
            michal = offset.bind(option)(michal);
            michal = michal.AssetOriginTypes;
            michal = michal.EDITED_ARCHIVED_ASSET;
            if(!(golfie !== michal)) { _fun00008_ip = 325; continue _fun00007 }
 293:
            golfie = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[verify];
            michal = golfie.bind(option)(michal);
            michal = michal.t;
            michal = michal.DYil9/;
            _fun00008_ip = 355; continue _fun00007;
 325:
            golfie = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[verify];
            entity = golfie.bind(option)(entity);
            entity = entity.t;
            michal = entity.eC2sZm;
 355:
            entity = {};
            entity['name'] = oscard;
            entity['dateTime'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['generateAvatarDescription'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: generateRecentAvatarFileDetails
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            golfie = argBar;
            zuuluu = _closure1_slot4;
            entity = {'storageHash': null, 'canAnimate': true, 'allowWebp': false};
            tangon = argFoo;
            entity['storageHash'] = tangon;
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = {};
            report = null;
            if(!(report != golfie)) { _fun00010_ip = 70; continue _fun00009 }
 48:
            oscard = golfie.split;
            report = ',';
            oscard = oscard.bind(golfie)(report);
            report = 0;
            option = oscard[report];
            _fun00010_ip = 125; continue _fun00009;
 70:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            report = 4;
            oscard = offset[report];
            oscard = verify.bind(tangon)(oscard);
            golfie = oscard.intl;
            oscard = golfie.string;
            report = offset[report];
            report = verify.bind(tangon)(report);
            report = report.t;
            report = report.lqaIxM;
            option = oscard.bind(golfie)(report);
 125:
            report = global;
            report = report.HermesInternal;
            golfie = report.concat;
            oscard = '';
            report = '.';
            report = golfie.bind(oscard)(option, report, zuuluu);
            entity['filename'] = report;
            michal = _closure1_slot6;
            michal = michal.bind(tangon)(zuuluu);
            entity['type'] = michal;
            return entity;
        }
    };
    zuuluu['generateRecentAvatarFileDetails'] = tangon;
    tangon = function(argFoo) { // Original name: createPendingImage
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argFoo;
            tangon = report.assetOrigin;
            entity = undefined;
            if(!(tangon === entity)) { _fun00012_ip = 50; continue _fun00011 }
 15:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 5;
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
            verify = 5;
            golfie = golfie[verify];
            golfie = option.bind(entity)(golfie);
            golfie = golfie.AssetOriginTypes;
            golfie = golfie.NEW_ASSET;
            if(!(golfie !== tangon)) { _fun00012_ip = 250; continue _fun00011 }
 109:
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[verify];
            golfie = option.bind(entity)(golfie);
            golfie = golfie.AssetOriginTypes;
            golfie = golfie.EDITED_ARCHIVED_ASSET;
            if(!(golfie !== tangon)) { _fun00012_ip = 227; continue _fun00011 }
 142:
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[verify];
            golfie = option.bind(entity)(golfie);
            golfie = golfie.AssetOriginTypes;
            golfie = golfie.ARCHIVED_ASSET;
            if(!(golfie !== tangon)) { _fun00012_ip = 208; continue _fun00011 }
 175:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            oscard = 6;
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
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            verify = entity.userId;
            option = entity.image;
            golfie = entity.size;
            report = undefined;
            if(!(golfie === report)) { _fun00014_ip = 28; continue _fun00013 }
 25:
            golfie = 80;
 28:
            oscard = entity.canAnimate;
            if(!(oscard === report)) { _fun00014_ip = 40; continue _fun00013 }
 38:
            oscard = true;
 40:
            michal = null;
            entity = option;
            if(!(michal != option)) { _fun00014_ip = 186; continue _fun00013 }
 52:
            zuuluu = 'string';
            michal = typeof option;
            entity = option;
            if(!(zuuluu !== michal)) { _fun00014_ip = 186; continue _fun00013 }
 66:
            tangon = option.assetOrigin;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            michal = 5;
            michal = yankee[michal];
            michal = offset.bind(report)(michal);
            michal = michal.AssetOriginTypes;
            michal = michal.ARCHIVED_ASSET;
            if(!(tangon !== michal)) { _fun00014_ip = 119; continue _fun00013 }
 111:
            michal = option.imageUri;
            _fun00014_ip = 183; continue _fun00013;
 119:
            tangon = _closure1_slot5;
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