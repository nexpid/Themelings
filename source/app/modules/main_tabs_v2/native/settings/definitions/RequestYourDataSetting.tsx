// app/modules/main_tabs_v2/native/settings/definitions/RequestYourDataSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    oscard = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    var _closure1_slot2 = option;
    entity = function(argFoo) { // Original name: setRequestingHarvest
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 9;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot8;
            michal = zuuluu.setState;
            entity = {};
            tangon = _closure2_slot0;
            entity['isRequesting'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot9 = entity;
    michal = function() { // Original name: useIsHarvestRequestDisabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            michal = 10;
            michal = verify[michal];
            golfie = undefined;
            oscard = option.bind(golfie)(michal);
            report = oscard.useStateFromStores;
            michal = _closure1_slot5;
            tangon = new Array(1);
            tangon[0] = michal;
            michal = function() {
                michal = _closure1_slot5;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            oscard = report.bind(oscard)(tangon, michal);
            offset = _closure1_slot8;
            michal = 11;
            tangon = verify[michal];
            tangon = option.bind(golfie)(tangon);
            report = tangon.shallow;
            tangon = function(argFoo) {
                entity = argFoo;
                entity = entity.harvestRequest;
                return entity;
            };
            report = offset.bind(golfie)(tangon, report);
            tangon = _closure1_slot8;
            michal = verify[michal];
            michal = option.bind(golfie)(michal);
            michal = michal.shallow;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.isRequesting;
                return entity;
            };
            michal = tangon.bind(golfie)(entity, michal);
            entity = null;
            entity = entity == oscard;
            if(entity) { _fun00002_ip = 171; continue _fun00001 }
 133:
            if(michal) { _fun00002_ip = 168; continue _fun00001 }
 136:
            tangon = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 12;
            zuuluu = option[zuuluu];
            tangon = tangon.bind(golfie)(zuuluu);
            zuuluu = tangon.harvestDisabled;
            michal = zuuluu.bind(tangon)(report, oscard);
 168:
            entity = michal;
 171:
            return entity;
        }
    };
    var _closure1_slot10 = michal;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = option[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = option[report];
    report = golfie.bind(entity)(report);
    report = report.ActivityIndicator;
    var _closure1_slot4 = report;
    report = 2;
    report = option[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = option[report];
    report = golfie.bind(entity)(report);
    oscard = report.MobileSetting;
    report = 4;
    report = option[report];
    report = golfie.bind(entity)(report);
    verify = report.RendererType;
    report = 5;
    report = option[report];
    report = golfie.bind(entity)(report);
    report = report.REQUEST_DATA_LIMIT_DAYS;
    var _closure1_slot6 = report;
    report = 6;
    report = option[report];
    report = golfie.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot7 = report;
    report = 7;
    report = option[report];
    yankee = golfie.bind(entity)(report);
    offset = yankee.createWithEqualityFn;
    report = function() {
        entity = {'isRequesting': false, 'harvestRequest': null};
        return entity;
    };
    report = offset.bind(yankee)(report);
    var _closure1_slot8 = report;
    report = {};
    verify = verify.PRESSABLE;
    report['type'] = verify;
    verify = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 13;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.XAHCgI;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    report['title'] = verify;
    oscard = oscard.DATA_AND_PRIVACY;
    report['parent'] = oscard;
    oscard = function() { // Original name: useHarvestRequestSettingTrailing
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = function() { // Original name: useIsRequestingHarvestState
                tangon = _closure1_slot8;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 11;
                entity = zuuluu[entity];
                zuuluu = undefined;
                entity = michal.bind(zuuluu)(entity);
                michal = entity.shallow;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.isRequesting;
                    return entity;
                };
                entity = tangon.bind(zuuluu)(entity, michal);
                return entity;
            };
            report = undefined;
            michal = entity.bind(report)();
            entity = null;
            if(!michal) { _fun00004_ip = 39; continue _fun00003 }
 20:
            tangon = _closure1_slot7;
            zuuluu = _closure1_slot4;
            michal = {};
            entity = tangon.bind(report)(zuuluu, michal);
 39:
            return entity;
        }
    };
    report['useTrailing'] = oscard;
    oscard = function() { // Original name: useRequestYourDataSettingDescription
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = function() { // Original name: useHarvestRequest
                tangon = _closure1_slot8;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 11;
                entity = zuuluu[entity];
                zuuluu = undefined;
                entity = michal.bind(zuuluu)(entity);
                michal = entity.shallow;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.harvestRequest;
                    return entity;
                };
                entity = tangon.bind(zuuluu)(entity, michal);
                return entity;
            };
            oscard = undefined;
            tangon = entity.bind(oscard)();
            zuuluu = _closure1_slot5;
            entity = zuuluu.getCurrentUser;
            report = entity.bind(zuuluu)();
            entity = null;
            if(!(entity != report)) { _fun00006_ip = 286; continue _fun00005 }
 40:
            zuuluu = report.isStaff;
            zuuluu = zuuluu.bind(report)();
            if(zuuluu) { _fun00006_ip = 227; continue _fun00005 }
 56:
            if(!(entity != tangon)) { _fun00006_ip = 225; continue _fun00005 }
 63:
            report = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 14;
            option = golfie[zuuluu];
            option = report.bind(oscard)(option);
            tangon = tangon.created_at;
            offset = option.bind(oscard)(tangon);
            verify = offset.add;
            option = _closure1_slot6;
            tangon = 'days';
            yankee = verify.bind(offset)(option, tangon);
            tangon = yankee.isBefore;
            zuuluu = golfie[zuuluu];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = zuuluu.bind(oscard)();
            tangon = tangon.bind(yankee)(zuuluu);
            zuuluu = null;
            if(tangon) { _fun00006_ip = 223; continue _fun00005 }
 142:
            report = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 13;
            golfie = verify[tangon];
            golfie = report.bind(oscard)(golfie);
            option = golfie.intl;
            golfie = option.formatToPlainString;
            tangon = verify[tangon];
            tangon = report.bind(oscard)(tangon);
            tangon = tangon.t;
            report = tangon.RNDlV1;
            tangon = {};
            offset = yankee.format;
            verify = 'MMMM Do YYYY';
            verify = offset.bind(yankee)(verify);
            tangon['date'] = verify;
            zuuluu = golfie.bind(option)(report, tangon);
 223:
            return zuuluu;
 225:
            return entity;
 227:
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 13;
            zuuluu = golfie[michal];
            zuuluu = report.bind(oscard)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = report.bind(oscard)(michal);
            michal = michal.t;
            michal = michal.ZPQLHx;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 286:
            return entity;
        }
    };
    report['useDescription'] = oscard;
    oscard = function() { // Original name: useIsRequestYourDataSettingDisabled
        michal = _closure1_slot10;
        entity = undefined;
        entity = michal.bind(entity)();
        return entity;
    };
    report['useIsDisabled'] = oscard;
    oscard = function() { // Original name: onRequestYourDataSettingPress
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = _closure1_slot5;
            entity = michal.getCurrentUser;
            entity = entity.bind(michal)();
            michal = null;
            if(!(michal != entity)) { _fun00008_ip = 502; continue _fun00007 }
 27:
            foxtra = entity.verified;
            michal = _closure1_slot1;
            yankee = _closure1_slot2;
            entity = 15;
            entity = yankee[entity];
            golfie = undefined;
            zuuluu = michal.bind(golfie)(entity);
            michal = zuuluu.show;
            entity = {};
            offset = _closure1_slot0;
            oscard = 13;
            option = yankee[oscard];
            option = offset.bind(golfie)(option);
            romeon = option.intl;
            verify = romeon.string;
            option = yankee[oscard];
            option = offset.bind(golfie)(option);
            option = option.t;
            if(foxtra) { _fun00008_ip = 296; continue _fun00007 }
 109:
            foxtra = option.tuGzBQ;
            foxtra = verify.bind(romeon)(foxtra);
            entity['title'] = foxtra;
            foxtra = yankee[oscard];
            foxtra = offset.bind(golfie)(foxtra);
            kiloes = foxtra.intl;
            backup = kiloes.string;
            foxtra = yankee[oscard];
            foxtra = offset.bind(golfie)(foxtra);
            foxtra = foxtra.t;
            foxtra = foxtra.c1f88/;
            foxtra = backup.bind(kiloes)(foxtra);
            entity['body'] = foxtra;
            foxtra = yankee[oscard];
            foxtra = offset.bind(golfie)(foxtra);
            kiloes = foxtra.intl;
            backup = kiloes.string;
            foxtra = yankee[oscard];
            foxtra = offset.bind(golfie)(foxtra);
            foxtra = foxtra.t;
            foxtra = foxtra.dQ71WV;
            foxtra = backup.bind(kiloes)(foxtra);
            entity['confirmText'] = foxtra;
            foxtra = yankee[oscard];
            foxtra = offset.bind(golfie)(foxtra);
            kiloes = foxtra.intl;
            backup = kiloes.string;
            foxtra = yankee[oscard];
            foxtra = offset.bind(golfie)(foxtra);
            foxtra = foxtra.t;
            foxtra = foxtra.ETE/oK;
            foxtra = backup.bind(kiloes)(foxtra);
            entity['cancelText'] = foxtra;
            foxtra = function() { // Original name: onConfirm
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 16;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.open;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            entity['onConfirm'] = foxtra;
            foxtra = michal.bind(zuuluu)(entity);
            _fun00008_ip = 502; continue _fun00007;
 296:
            option = option.jxXMEx;
            option = verify.bind(romeon)(option);
            entity['title'] = option;
            option = yankee[oscard];
            option = offset.bind(golfie)(option);
            romeon = option.intl;
            verify = romeon.string;
            option = yankee[oscard];
            option = offset.bind(golfie)(option);
            option = option.t;
            option = option.vtRhDA;
            option = verify.bind(romeon)(option);
            entity['body'] = option;
            option = yankee[oscard];
            option = offset.bind(golfie)(option);
            romeon = option.intl;
            verify = romeon.string;
            option = yankee[oscard];
            option = offset.bind(golfie)(option);
            option = option.t;
            option = option.NYgNg4;
            option = verify.bind(romeon)(option);
            entity['confirmText'] = option;
            option = yankee[oscard];
            option = offset.bind(golfie)(option);
            verify = option.intl;
            option = verify.string;
            oscard = yankee[oscard];
            oscard = offset.bind(golfie)(oscard);
            oscard = oscard.t;
            oscard = oscard.jpVjsr;
            oscard = option.bind(verify)(oscard);
            entity['cancelText'] = oscard;
            oscard = _closure1_slot3;
            report = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00010_ip = 541; continue _fun00009 }
 10:
                        report = undefined;
                        tangon = undefined;
                        oscard = _closure1_slot9;
                        michal = true;
                        michal = oscard.bind(report)(michal);
 28: // try_start_0 // try_start_1
                        oscard = _closure1_slot0;
                        golfie = _closure1_slot2;
                        michal = 8;
                        michal = golfie[michal];
                        golfie = oscard.bind(report)(michal);
                        oscard = golfie.requestHarvest;
                        michal = new Array(0);
                        michal = oscard.bind(golfie)(michal);
                        SaveGenerator(address=67);
 65:
                        return michal;
 67:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(oscard) { _fun00010_ip = 360; continue _fun00009 }
 76:
                        tangon = michal;
                        golfie = null;
                        if(!(golfie != michal)) { _fun00010_ip = 100; continue _fun00009 }
 85:
                        oscard = tangon;
                        oscard = oscard.body;
                        if(!(golfie == oscard)) { _fun00010_ip = 238; continue _fun00009 }
 100:
                        golfie = _closure1_slot1;
                        foxtra = _closure1_slot2;
                        oscard = 15;
                        oscard = foxtra[oscard];
                        option = golfie.bind(report)(oscard);
                        golfie = option.show;
                        oscard = {};
                        romeon = _closure1_slot0;
                        verify = 13;
                        offset = foxtra[verify];
                        offset = romeon.bind(report)(offset);
                        backup = offset.intl;
                        yankee = backup.string;
                        offset = foxtra[verify];
                        offset = romeon.bind(report)(offset);
                        offset = offset.t;
                        offset = offset.OjbtDg;
                        offset = yankee.bind(backup)(offset);
                        oscard['title'] = offset;
                        offset = foxtra[verify];
                        offset = romeon.bind(report)(offset);
                        yankee = offset.intl;
                        offset = yankee.string;
                        verify = foxtra[verify];
                        verify = romeon.bind(report)(verify);
                        verify = verify.t;
                        verify = verify.0F5Jys;
                        verify = offset.bind(yankee)(verify);
                        oscard['body'] = verify;
                        oscard = golfie.bind(option)(oscard);
                        _fun00010_ip = 355; continue _fun00009;
 238:
                        oscard = tangon.body;
                        tangon = function(argFoo) { // Original name: setHarvestRequest
                            entity = argFoo;
                            var _closure5_slot0 = entity;
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            entity = 9;
                            zuuluu = zuuluu[entity];
                            entity = undefined;
                            tangon = tangon.bind(entity)(zuuluu);
                            zuuluu = tangon.batchUpdates;
                            michal = function() {
                                zuuluu = _closure1_slot8;
                                michal = zuuluu.setState;
                                entity = {};
                                tangon = _closure5_slot0;
                                entity['harvestRequest'] = tangon;
                                entity = michal.bind(zuuluu)(entity);
                                return entity;
                            };
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        };
                        tangon = tangon.bind(report)(oscard);
                        oscard = _closure1_slot1;
                        romeon = _closure1_slot2;
                        tangon = 15;
                        tangon = romeon[tangon];
                        golfie = oscard.bind(report)(tangon);
                        oscard = golfie.show;
                        tangon = {};
                        option = '';
                        tangon['title'] = option;
                        yankee = _closure1_slot0;
                        option = 13;
                        verify = romeon[option];
                        verify = yankee.bind(report)(verify);
                        offset = verify.intl;
                        verify = offset.string;
                        option = romeon[option];
                        option = yankee.bind(report)(option);
                        option = option.t;
                        option = option.6Nmv4u;
                        option = verify.bind(offset)(option);
                        tangon['body'] = option;
                        tangon = oscard.bind(golfie)(tangon);
 355: // try_end0
                        _fun00010_ip = 512; continue _fun00009;
 360: // try_end1
                        oscard = _closure1_slot9;
                        tangon = false;
                        tangon = oscard.bind(report)(tangon);
                        return michal;
 374: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=1);
                        tangon = _closure1_slot1;
                        yankee = _closure1_slot2;
                        michal = 15;
                        michal = yankee[michal];
                        oscard = tangon.bind(report)(michal);
                        tangon = oscard.show;
                        michal = {};
                        offset = _closure1_slot0;
                        golfie = 13;
                        option = yankee[golfie];
                        option = offset.bind(report)(option);
                        romeon = option.intl;
                        verify = romeon.string;
                        option = yankee[golfie];
                        option = offset.bind(report)(option);
                        option = option.t;
                        option = option.OjbtDg;
                        option = verify.bind(romeon)(option);
                        michal['title'] = option;
                        option = yankee[golfie];
                        option = offset.bind(report)(option);
                        verify = option.intl;
                        option = verify.string;
                        golfie = yankee[golfie];
                        golfie = offset.bind(report)(golfie);
                        golfie = golfie.t;
                        golfie = golfie.0F5Jys;
                        golfie = option.bind(verify)(golfie);
                        michal['body'] = golfie;
                        michal = tangon.bind(oscard)(michal);
 512: // try_end2
                        tangon = _closure1_slot9;
                        michal = false;
                        michal = tangon.bind(report)(michal);
                        return report;
 526: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        tangon = _closure1_slot9;
                        zuuluu = false;
                        zuuluu = tangon.bind(report)(zuuluu);
                        throw michal;
 541:
                        return entity;
                    }
                };
                return entity;
            };
            report = oscard.bind(golfie)(report);
            var _closure2_slot0 = report;
            tangon = function() {
                entity = undefined;
                tangon = _closure2_slot0;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            entity['onConfirm'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 502:
            entity = undefined;
            return entity;
        }
    };
    report['onPress'] = oscard;
    oscard = 17;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/main_tabs_v2/native/settings/definitions/RequestYourDataSetting.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    tangon = function() { // Original name: fetchHarvestStatus
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 8;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.getHarvestStatus;
        report = zuuluu.bind(tangon)();
        tangon = report.then;
        zuuluu = function(argFoo) {
            entity = argFoo;
            var _closure3_slot0 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 9;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure1_slot8;
                michal = zuuluu.setState;
                entity = {};
                tangon = false;
                entity['isRequesting'] = tangon;
                tangon = _closure3_slot0;
                tangon = tangon.body;
                entity['harvestRequest'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        michal = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 9;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure1_slot8;
                michal = zuuluu.setState;
                entity = {};
                tangon = false;
                entity['isRequesting'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['fetchHarvestStatus'] = tangon;
    zuuluu['useIsHarvestRequestDisabled'] = michal;
    return entity;
})();