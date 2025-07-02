// app/modules/game_console/native/GameConsoleAlertUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    option = oscard[entity];
    michal = argCor;
    entity = undefined;
    michal = michal.bind(entity)(option);
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.GAME_CONSOLE_ALERT_MODAL_LOCATION;
    var _closure1_slot4 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    golfie = michal.InputModes;
    var _closure1_slot5 = golfie;
    michal = michal.PlatformTypes;
    var _closure1_slot6 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.jsx;
    var _closure1_slot7 = michal;
    michal = {};
    golfie = function(argFoo) { // Original name: maybeShowPTTAlert
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot3;
            zuuluu = tangon.getMode;
            tangon = zuuluu.bind(tangon)();
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.PUSH_TO_TALK;
            if(!(tangon === zuuluu)) { _fun00002_ip = 357; continue _fun00001 }
 36:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 5;
            zuuluu = golfie[zuuluu];
            option = undefined;
            report = oscard.bind(option)(zuuluu);
            tangon = report.UNSAFE_isDismissibleContentDismissed;
            zuuluu = 6;
            zuuluu = golfie[zuuluu];
            zuuluu = oscard.bind(option)(zuuluu);
            zuuluu = zuuluu.DismissibleContent;
            zuuluu = zuuluu.CONSOLE_PTT_DISABLE_ALERT;
            zuuluu = tangon.bind(report)(zuuluu);
            if(zuuluu) { _fun00002_ip = 357; continue _fun00001 }
 99:
            zuuluu = {};
            tangon = _closure1_slot6;
            oscard = tangon.XBOX;
            golfie = _closure1_slot0;
            verify = _closure1_slot2;
            michal = 7;
            report = verify[michal];
            report = golfie.bind(option)(report);
            yankee = report.intl;
            offset = yankee.string;
            report = verify[michal];
            report = golfie.bind(option)(report);
            report = report.t;
            report = report.bVZ7v7;
            report = offset.bind(yankee)(report);
            zuuluu[oscard] = report;
            oscard = tangon.PLAYSTATION;
            report = verify[michal];
            report = golfie.bind(option)(report);
            yankee = report.intl;
            offset = yankee.string;
            report = verify[michal];
            report = golfie.bind(option)(report);
            report = report.t;
            report = report.6iqUsb;
            report = offset.bind(yankee)(report);
            zuuluu[oscard] = report;
            tangon = tangon.PLAYSTATION_STAGING;
            report = verify[michal];
            report = golfie.bind(option)(report);
            oscard = report.intl;
            report = oscard.string;
            michal = verify[michal];
            michal = golfie.bind(option)(michal);
            michal = michal.t;
            michal = michal.6iqUsb;
            michal = report.bind(oscard)(michal);
            zuuluu[tangon] = michal;
            michal = argFoo;
            zuuluu = zuuluu[michal];
            var _closure2_slot0 = zuuluu;
            michal = null;
            if(!(michal != zuuluu)) { _fun00002_ip = 337; continue _fun00001 }
 300:
            michal = global;
            zuuluu = michal.Promise;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            romeon = function(argFoo) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                zuuluu = _closure1_slot1;
                offset = _closure1_slot2;
                entity = 8;
                michal = offset[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.show;
                michal = {};
                golfie = _closure2_slot0;
                michal['title'] = golfie;
                verify = _closure1_slot0;
                oscard = 7;
                golfie = offset[oscard];
                golfie = verify.bind(entity)(golfie);
                option = golfie.intl;
                golfie = option.string;
                oscard = offset[oscard];
                oscard = verify.bind(entity)(oscard);
                oscard = oscard.t;
                oscard = oscard.bL21zs;
                oscard = golfie.bind(option)(oscard);
                michal['body'] = oscard;
                report = function() { // Original name: onConfirm
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    entity = 5;
                    michal = oscard[entity];
                    entity = undefined;
                    tangon = report.bind(entity)(michal);
                    zuuluu = tangon.UNSAFE_markDismissibleContentAsDismissed;
                    michal = 6;
                    michal = oscard[michal];
                    michal = report.bind(entity)(michal);
                    michal = michal.DismissibleContent;
                    michal = michal.CONSOLE_PTT_DISABLE_ALERT;
                    michal = zuuluu.bind(tangon)(michal);
                    michal = _closure3_slot0;
                    michal = michal.bind(entity)();
                    return entity;
                };
                michal['onConfirm'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            foxtra = michal;
            entity = new foxtra[zuuluu](romeon, yankee);
            entity = entity instanceof Object ? entity : michal;
            _fun00002_ip = 355; continue _fun00001;
 337:
            michal = global;
            zuuluu = michal.Promise;
            michal = zuuluu.resolve;
            entity = michal.bind(zuuluu)();
 355:
            return entity;
 357:
            entity = global;
            michal = entity.Promise;
            entity = michal.resolve;
            entity = entity.bind(michal)();
            return entity;
        }
    };
    michal['maybeShowPTTAlert'] = golfie;
    tangon = function(argFoo) { // Original name: showSelfDismissableAlert
        entity = argFoo;
        golfie = entity.title;
        foxtra = entity.body;
        romeon = entity.errorCodeMessage;
        entity = entity.reconnectPlatformType;
        var _closure2_slot0 = entity;
        offset = _closure1_slot1;
        yankee = _closure1_slot2;
        verify = 8;
        michal = yankee[verify];
        entity = undefined;
        tangon = offset.bind(entity)(michal);
        zuuluu = tangon.show;
        michal = {};
        michal['title'] = golfie;
        option = _closure1_slot7;
        golfie = _closure1_slot0;
        oscard = 9;
        oscard = yankee[oscard];
        oscard = golfie.bind(entity)(oscard);
        golfie = oscard.SelfDismissibleAlertBody;
        oscard = {};
        oscard['body'] = foxtra;
        oscard['errorCodeMessage'] = romeon;
        verify = yankee[verify];
        verify = offset.bind(entity)(verify);
        verify = verify.close;
        oscard['dismissCallback'] = verify;
        oscard = option.bind(entity)(golfie, oscard);
        michal['body'] = oscard;
        report = function() { // Original name: onConfirm
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = _closure2_slot0;
                entity = null;
                if(!(entity != michal)) { _fun00004_ip = 62; continue _fun00003 }
 13:
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 10;
                entity = zuuluu[entity];
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(entity);
                entity = {};
                report = _closure2_slot0;
                entity['platformType'] = report;
                tangon = _closure1_slot4;
                entity['location'] = tangon;
                entity = michal.bind(zuuluu)(entity);
 62:
                entity = undefined;
                return entity;
            }
        };
        michal['onConfirm'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['showSelfDismissableAlert'] = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/game_console/native/GameConsoleAlertUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();