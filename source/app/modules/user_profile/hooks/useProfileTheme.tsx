// app/modules/user_profile/hooks/useProfileTheme.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Color;
    var _closure1_slot5 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/hooks/useProfileTheme.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useProfileTheme
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            backup = entity.user;
            foxtra = entity.displayProfile;
            yankee = entity.pendingThemeColors;
            romeon = entity.pendingAvatar;
            entity = entity.isPreview;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 3;
            michal = tangon[michal];
            verify = undefined;
            michal = zuuluu.bind(verify)(michal);
            report = michal.bind(verify)();
            zuuluu = _closure1_slot0;
            michal = 4;
            michal = tangon[michal];
            golfie = zuuluu.bind(verify)(michal);
            tangon = golfie.useStateFromStores;
            michal = _closure1_slot4;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                entity = _closure1_slot4;
                entity = entity.syncProfileThemeWithUserTheme;
                return entity;
            };
            option = tangon.bind(golfie)(zuuluu, michal);
            golfie = null;
            if(!(golfie == romeon)) { _fun00002_ip = 154; continue _fun00001 }
 113:
            zuuluu = golfie == backup;
            michal = undefined;
            if(zuuluu) { _fun00002_ip = 151; continue _fun00001 }
 122:
            offset = backup.getAvatarURL;
            zuuluu = golfie == foxtra;
            tangon = undefined;
            if(zuuluu) { _fun00002_ip = 142; continue _fun00001 }
 137:
            tangon = foxtra.guildId;
 142:
            zuuluu = 80;
            michal = offset.bind(backup)(tangon, zuuluu);
 151:
            romeon = michal;
 154:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 5;
            michal = tangon[michal];
            backup = zuuluu.bind(verify)(michal);
            offset = backup.useColorValue;
            michal = _closure1_slot5;
            michal = michal.PRIMARY_530;
            michal = offset.bind(backup)(michal);
            offset = michal.hex;
            michal = 6;
            michal = tangon[michal];
            tangon = zuuluu.bind(verify)(michal);
            zuuluu = tangon.useAvatarColors;
            michal = false;
            tangon = zuuluu.bind(tangon)(romeon, offset, michal);
            zuuluu = _closure1_slot3;
            michal = 2;
            zuuluu = zuuluu.bind(verify)(tangon, michal);
            michal = 0;
            romeon = zuuluu[michal];
            tangon = 1;
            offset = zuuluu[tangon];
            if(!(golfie != foxtra)) { _fun00002_ip = 268; continue _fun00001 }
 257:
            zuuluu = foxtra.canEditThemes;
            if(zuuluu) { _fun00002_ip = 293; continue _fun00001 }
 268:
            if(entity) { _fun00002_ip = 293; continue _fun00001 }
 271:
            entity = {'theme': null, 'primaryColor': null, 'secondaryColor': null};
            entity['theme'] = report;
            return entity;
 293:
            zuuluu = golfie == foxtra;
            entity = undefined;
            if(zuuluu) { _fun00002_ip = 315; continue _fun00001 }
 302:
            zuuluu = foxtra.getPreviewThemeColors;
            entity = zuuluu.bind(foxtra)(yankee);
 315:
            yankee = golfie == entity;
            zuuluu = undefined;
            if(yankee) { _fun00002_ip = 328; continue _fun00001 }
 324:
            zuuluu = entity[michal];
 328:
            if(!(golfie == zuuluu)) { _fun00002_ip = 363; continue _fun00001 }
 332:
            yankee = _closure1_slot0;
            foxtra = _closure1_slot2;
            michal = 7;
            michal = foxtra[michal];
            yankee = yankee.bind(verify)(michal);
            michal = yankee.hex2int;
            zuuluu = michal.bind(yankee)(romeon);
 363:
            yankee = golfie == entity;
            michal = undefined;
            if(yankee) { _fun00002_ip = 376; continue _fun00001 }
 372:
            michal = entity[tangon];
 376:
            if(!(golfie == michal)) { _fun00002_ip = 411; continue _fun00001 }
 380:
            tangon = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 7;
            entity = yankee[entity];
            tangon = tangon.bind(verify)(entity);
            entity = tangon.hex2int;
            michal = entity.bind(tangon)(offset);
 411:
            entity = {};
            tangon = report;
            if(option) { _fun00002_ip = 460; continue _fun00001 }
 419:
            option = _closure1_slot0;
            offset = _closure1_slot2;
            oscard = 8;
            oscard = offset[oscard];
            option = option.bind(verify)(oscard);
            oscard = option.getProfileTheme;
            oscard = oscard.bind(option)(zuuluu);
            if(!(golfie != oscard)) { _fun00002_ip = 457; continue _fun00001 }
 454:
            report = oscard;
 457:
            tangon = report;
 460:
            entity['theme'] = tangon;
            entity['primaryColor'] = zuuluu;
            entity['secondaryColor'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();