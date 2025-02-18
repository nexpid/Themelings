// app/actions/native/AlertActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    golfie = oscard[entity];
    michal = argCor;
    entity = undefined;
    michal = michal.bind(entity)(golfie);
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.jsx;
    var _closure1_slot3 = michal;
    michal = {};
    golfie = function(argFoo) { // Original name: openLazy
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            zuuluu = tangon.importer;
            report = tangon.hideActionSheet;
            michal = undefined;
            if(!(report === michal)) { _fun00002_ip = 25; continue _fun00001 }
 23:
            report = true;
 25:
            var _closure2_slot0 = report;
            tangon = tangon.isDismissable;
            if(!(tangon === michal)) { _fun00002_ip = 41; continue _fun00001 }
 39:
            tangon = false;
 41:
            var _closure2_slot1 = tangon;
            zuuluu = zuuluu.bind(michal)();
            michal = zuuluu.then;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot0;
                    if(!entity) { _fun00004_ip = 45; continue _fun00003 }
 10:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 2;
                    michal = michal[entity];
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    entity = michal.hideActionSheet;
                    entity = entity.bind(michal)();
 45:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 3;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    oscard = 'ALERT_OPEN';
                    michal['type'] = oscard;
                    oscard = argFoo;
                    michal['alert'] = oscard;
                    report = _closure2_slot1;
                    michal['isDismissable'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    michal['openLazy'] = golfie;
    golfie = function() { // Original name: close
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'ALERT_CLOSE';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['close'] = golfie;
    golfie = function(argFoo) { // Original name: show
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            option = argFoo;
            tangon = this;
            oscard = option.hideActionSheet;
            report = option.isDismissable;
            michal = option.confirmText;
            entity = undefined;
            if(!(michal === entity)) { _fun00006_ip = 90; continue _fun00005 }
 32:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            zuuluu = 4;
            verify = romeon[zuuluu];
            verify = yankee.bind(entity)(verify);
            offset = verify.intl;
            verify = offset.string;
            zuuluu = romeon[zuuluu];
            zuuluu = yankee.bind(entity)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.BddRzc;
            michal = verify.bind(offset)(zuuluu);
 90:
            var _closure2_slot0 = michal;
            zuuluu = {'hideActionSheet': 0, 'isDismissable': 0, 'confirmText': 0};
            backup = null;
            kiloes = zuuluu;
            michal = silentSetPrototypeOf(kiloes, backup);
            kiloes = {};
            backup = option;
            foxtra = zuuluu;
            michal = copyDataProperties(kiloes, backup, foxtra);
            var _closure2_slot1 = michal;
            zuuluu = tangon.openLazy;
            michal = {};
            golfie = function() { // Original name: importer
                zuuluu = _closure1_slot0;
                entity = _closure1_slot2;
                michal = 6;
                michal = entity[michal];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = 5;
                michal = entity[michal];
                entity = entity.paths;
                zuuluu = zuuluu.bind(tangon)(michal, entity);
                michal = zuuluu.then;
                entity = function(argFoo) {
                    michal = argFoo;
                    michal = michal.default;
                    var _closure4_slot0 = michal;
                    entity = function(argFoo) {
                        tangon = _closure1_slot3;
                        zuuluu = _closure4_slot0;
                        michal = {};
                        oscard = argFoo;
                        golfie = michal;
                        entity = copyDataProperties(golfie, oscard);
                        oscard = _closure2_slot1;
                        golfie = michal;
                        report = copyDataProperties(golfie, oscard);
                        report = _closure2_slot0;
                        entity = 'confirmText';
                        michal[entity] = report;
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    };
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal['importer'] = golfie;
            michal['hideActionSheet'] = oscard;
            michal['isDismissable'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    michal['show'] = golfie;
    tangon = function(argFoo) { // Original name: confirm
        michal = this;
        var _closure2_slot0 = michal;
        michal = argFoo;
        var _closure2_slot1 = michal;
        michal = global;
        zuuluu = michal.Promise;
        michal = zuuluu.prototype;
        michal = Object.create(michal, {constructor: {value: zuuluu}});
        tangon = function(argFoo) {
            entity = argFoo;
            var _closure3_slot0 = entity;
            tangon = _closure2_slot0;
            zuuluu = tangon.show;
            michal = {};
            entity = function() { // Original name: onConfirm
                zuuluu = _closure3_slot0;
                entity = undefined;
                michal = true;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal['onConfirm'] = entity;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            golfie = 4;
            option = yankee[golfie];
            entity = undefined;
            option = offset.bind(entity)(option);
            verify = option.intl;
            option = verify.string;
            golfie = yankee[golfie];
            golfie = offset.bind(entity)(golfie);
            golfie = golfie.t;
            golfie = golfie.ETE/oK;
            golfie = option.bind(verify)(golfie);
            michal['cancelText'] = golfie;
            oscard = function() { // Original name: onCancel
                zuuluu = _closure3_slot0;
                entity = undefined;
                michal = false;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal['onCancel'] = oscard;
            romeon = _closure2_slot1;
            foxtra = michal;
            report = copyDataProperties(foxtra, romeon);
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report = michal;
        entity = new report[zuuluu](tangon, zuuluu);
        entity = entity instanceof Object ? entity : michal;
        return entity;
    };
    michal['confirm'] = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/native/AlertActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();