// app/utils/native/ApplicationUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    entity = argBaz;
    var _closure1_slot1 = entity;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golfie;
    tangon = function(argFoo) { // Original name: openOAuth2Modal
        option = argFoo;
        var _closure2_slot0 = option;
        report = _closure1_slot1;
        zuuluu = _closure1_slot3;
        tangon = 7;
        oscard = zuuluu[tangon];
        entity = undefined;
        offset = report.bind(entity)(oscard);
        verify = offset.popWithKey;
        oscard = _closure1_slot5;
        oscard = verify.bind(offset)(oscard);
        tangon = zuuluu[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.pushLazy;
        verify = _closure1_slot0;
        tangon = 9;
        tangon = zuuluu[tangon];
        verify = verify.bind(entity)(tangon);
        tangon = 8;
        tangon = zuuluu[tangon];
        zuuluu = zuuluu.paths;
        tangon = verify.bind(entity)(tangon, zuuluu);
        zuuluu = {};
        foxtra = zuuluu;
        romeon = option;
        option = copyDataProperties(foxtra, romeon);
        option = function() { // Original name: dismissOAuthModal
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure2_slot0;
                zuuluu = michal.dismissOAuthModal;
                michal = null;
                if(!(michal != zuuluu)) { _fun00002_ip = 33; continue _fun00001 }
 19:
                michal = _closure2_slot0;
                entity = michal.dismissOAuthModal;
                entity = entity.bind(michal)();
 33:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot3;
                entity = 7;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.popWithKey;
                michal = _closure1_slot5;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        golfie = 'dismissOAuthModal';
        zuuluu[golfie] = option;
        michal = _closure1_slot5;
        michal = report.bind(oscard)(tangon, zuuluu, michal);
        return entity;
    };
    var _closure1_slot6 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    report = report.AnalyticEvents;
    var _closure1_slot4 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.OAUTH2_AUTHORIZE_MODAL_KEY;
    var _closure1_slot5 = report;
    report = 11;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'utils/native/ApplicationUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: installApplication
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            yankee = entity.applicationId;
            report = entity.customInstallUrl;
            var _closure2_slot0 = report;
            kiloes = entity.installParams;
            zuuluu = entity.integrationTypesConfig;
            option = entity.guildId;
            golfie = entity.channelId;
            oscard = entity.disableGuildSelect;
            offset = entity.source;
            entity = entity.oauth2Callback;
            var _closure2_slot1 = entity;
            romeon = null;
            if(!(romeon == report)) { _fun00004_ip = 458; continue _fun00003 }
 74:
            if(!(romeon != zuuluu)) { _fun00004_ip = 118; continue _fun00003 }
 78:
            entity = global;
            michal = entity.Object;
            entity = michal.values;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.some;
            entity = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = null;
                    report = zuuluu == tangon;
                    entity = undefined;
                    if(report) { _fun00006_ip = 20; continue _fun00005 }
 14:
                    entity = tangon.oauth2_install_params;
 20:
                    entity = zuuluu != entity;
                    if(entity) { _fun00006_ip = 46; continue _fun00005 }
 27:
                    report = zuuluu == tangon;
                    michal = undefined;
                    if(report) { _fun00006_ip = 42; continue _fun00005 }
 36:
                    michal = tangon.oauth2InstallParams;
 42:
                    entity = zuuluu != michal;
 46:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            if(entity) { _fun00004_ip = 340; continue _fun00003 }
 118:
            if(!(romeon != kiloes)) { _fun00004_ip = 336; continue _fun00003 }
 125:
            michal = _closure1_slot1;
            zuuluu = _closure1_slot3;
            entity = 2;
            entity = zuuluu[entity];
            zuuluu = undefined;
            backup = michal.bind(zuuluu)(entity);
            verify = backup.track;
            entity = _closure1_slot4;
            michal = entity.APPLICATION_ADD_TO_SERVER_CLICKED;
            entity = {};
            entity['application_id'] = yankee;
            sizing = 'in_app';
            entity['auth_type'] = sizing;
            entity['source'] = offset;
            sizing = 'mobile_native';
            entity['device_platform'] = sizing;
            entity = verify.bind(backup)(michal, entity);
            michal = _closure1_slot6;
            entity = {};
            entity['clientId'] = yankee;
            entity['guildId'] = option;
            entity['channelId'] = golfie;
            entity['disableGuildSelect'] = oscard;
            backup = romeon == kiloes;
            verify = undefined;
            if(backup) { _fun00004_ip = 241; continue _fun00003 }
 235:
            verify = kiloes.scopes;
 241:
            entity['scopes'] = verify;
            backup = romeon == kiloes;
            verify = undefined;
            if(backup) { _fun00004_ip = 261; continue _fun00003 }
 255:
            verify = kiloes.permissions;
 261:
            backup = romeon != verify;
            verify = undefined;
            if(!backup) { _fun00004_ip = 316; continue _fun00003 }
 270:
            backup = _closure1_slot2;
            sizing = _closure1_slot3;
            foxtra = 6;
            foxtra = sizing[foxtra];
            backup = backup.bind(zuuluu)(foxtra);
            foxtra = backup.deserialize;
            sizing = romeon == kiloes;
            romeon = undefined;
            if(sizing) { _fun00004_ip = 311; continue _fun00003 }
 305:
            romeon = kiloes.permissions;
 311:
            verify = foxtra.bind(backup)(romeon);
 316:
            entity['permissions'] = verify;
            verify = function(argFoo) { // Original name: callback
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = _closure1_slot1;
                    michal = _closure1_slot3;
                    entity = 5;
                    michal = michal[entity];
                    entity = undefined;
                    michal = tangon.bind(entity)(michal);
                    michal = michal.bind(entity)(zuuluu);
                    report = _closure2_slot1;
                    tangon = null;
                    if(!(tangon != report)) { _fun00008_ip = 55; continue _fun00007 }
 46:
                    michal = _closure2_slot1;
                    michal = michal.bind(entity)(zuuluu);
 55:
                    return entity;
                }
            };
            entity['callback'] = verify;
            entity = michal.bind(zuuluu)(entity);
 336:
            entity = undefined;
            return entity;
 340:
            verify = _closure1_slot1;
            zuuluu = _closure1_slot3;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            foxtra = verify.bind(entity)(zuuluu);
            romeon = foxtra.track;
            zuuluu = _closure1_slot4;
            verify = zuuluu.APPLICATION_ADD_TO_SERVER_CLICKED;
            zuuluu = {};
            zuuluu['application_id'] = yankee;
            backup = 'in_app';
            zuuluu['auth_type'] = backup;
            zuuluu['source'] = offset;
            backup = 'mobile_native';
            zuuluu['device_platform'] = backup;
            zuuluu = romeon.bind(foxtra)(verify, zuuluu);
            zuuluu = _closure1_slot6;
            michal = {};
            michal['clientId'] = yankee;
            michal['guildId'] = option;
            michal['channelId'] = golfie;
            michal['disableGuildSelect'] = oscard;
            oscard = function(argFoo) { // Original name: callback
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = _closure1_slot1;
                    michal = _closure1_slot3;
                    entity = 5;
                    michal = michal[entity];
                    entity = undefined;
                    michal = tangon.bind(entity)(michal);
                    michal = michal.bind(entity)(zuuluu);
                    report = _closure2_slot1;
                    tangon = null;
                    if(!(tangon != report)) { _fun00010_ip = 55; continue _fun00009 }
 46:
                    michal = _closure2_slot1;
                    michal = michal.bind(entity)(zuuluu);
 55:
                    return entity;
                }
            };
            michal['callback'] = oscard;
            michal = zuuluu.bind(entity)(michal);
            return entity;
 458:
            golfie = _closure1_slot1;
            oscard = _closure1_slot3;
            michal = 2;
            michal = oscard[michal];
            zuuluu = undefined;
            verify = golfie.bind(zuuluu)(michal);
            option = verify.track;
            michal = _closure1_slot4;
            golfie = michal.APPLICATION_ADD_TO_SERVER_CLICKED;
            michal = {};
            michal['application_id'] = yankee;
            yankee = 'custom_url';
            michal['auth_type'] = yankee;
            michal['source'] = offset;
            offset = 'mobile_native';
            michal['device_platform'] = offset;
            michal = option.bind(verify)(golfie, michal);
            michal = _closure1_slot0;
            entity = 3;
            entity = oscard[entity];
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.handleClick;
            entity = {};
            entity['href'] = report;
            tangon = function() { // Original name: onConfirm
                zuuluu = _closure1_slot0;
                michal = _closure1_slot3;
                entity = 4;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.openURL;
                michal = _closure2_slot0;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity['onConfirm'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['installApplication'] = report;
    zuuluu['openOAuth2Modal'] = tangon;
    michal = function(argFoo) { // Original name: installPrivateChannelIntegration
        entity = argFoo;
        verify = entity.applicationId;
        option = entity.channelId;
        golfie = entity.callback;
        tangon = _closure1_slot1;
        yankee = _closure1_slot3;
        entity = 7;
        zuuluu = yankee[entity];
        entity = undefined;
        oscard = tangon.bind(entity)(zuuluu);
        report = oscard.pushLazy;
        offset = _closure1_slot0;
        zuuluu = 9;
        zuuluu = yankee[zuuluu];
        romeon = offset.bind(entity)(zuuluu);
        zuuluu = 8;
        tangon = yankee[zuuluu];
        zuuluu = yankee.paths;
        tangon = romeon.bind(entity)(tangon, zuuluu);
        zuuluu = {};
        zuuluu['clientId'] = verify;
        verify = 10;
        verify = yankee[verify];
        verify = offset.bind(entity)(verify);
        verify = verify.OAuth2Scopes;
        offset = verify.APPLICATIONS_COMMANDS;
        verify = new Array(1);
        verify[0] = offset;
        zuuluu['scopes'] = verify;
        zuuluu['channelId'] = option;
        option = function() { // Original name: dismissOAuthModal
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot3;
            michal = 7;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = tangon.bind(michal)(zuuluu);
            michal = zuuluu.popWithKey;
            entity = _closure1_slot5;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        zuuluu['dismissOAuthModal'] = option;
        option = true;
        zuuluu['disableGuildSelect'] = option;
        zuuluu['callback'] = golfie;
        michal = _closure1_slot5;
        michal = report.bind(oscard)(tangon, zuuluu, michal);
        return entity;
    };
    zuuluu['installPrivateChannelIntegration'] = michal;
    return entity;
})();