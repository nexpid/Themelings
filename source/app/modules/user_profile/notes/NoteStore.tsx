// app/modules/user_profile/notes/NoteStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 70: // try_end0
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot6 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.TypeTag;
    tangon = tangon.constructInPlace;
    var _closure1_slot5 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.KvStore;
    tangon = function(argFoo) {
        tangon = function() { // Original name: NoteStore
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot0;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot3;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot2;
                entity = _closure1_slot6;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00004_ip = 69; continue _fun00003 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00004_ip = 105; continue _fun00003;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot3;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        oscard = _closure1_slot4;
        zuuluu = undefined;
        report = argFoo;
        report = oscard.bind(zuuluu)(tangon, report);
        michal = _closure1_slot1;
        report = {};
        oscard = 'getNote';
        report['key'] = oscard;
        entity = function(argFoo) { // Original name: value
            zuuluu = this;
            michal = zuuluu.get;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = tangon.bind(entity)(golfie);
    tangon = 'NoteStore';
    option['displayName'] = tangon;
    golfie = {};
    tangon = function(argFoo, argBar) { // Original name: CONNECTION_OPEN
        michal = argBar;
        entity = michal.reset;
        entity = entity.bind(michal)();
        return entity;
    };
    golfie['CONNECTION_OPEN'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: OVERLAY_INITIALIZE
        michal = argBar;
        entity = michal.reset;
        entity = entity.bind(michal)();
        return entity;
    };
    golfie['OVERLAY_INITIALIZE'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: USER_NOTE_UPDATE
        entity = argFoo;
        report = argBar;
        tangon = report.set;
        zuuluu = entity.id;
        golfie = _closure1_slot5;
        oscard = {};
        michal = false;
        oscard['loading'] = michal;
        entity = entity.note;
        oscard['note'] = entity;
        entity = undefined;
        michal = 'Note';
        michal = golfie.bind(entity)(michal, oscard);
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    golfie['USER_NOTE_UPDATE'] = tangon;
    michal = function(argFoo, argBar) { // Original name: USER_NOTE_LOAD_START
        report = argBar;
        tangon = report.set;
        entity = argFoo;
        zuuluu = entity.userId;
        golfie = _closure1_slot5;
        entity = undefined;
        oscard = 'Note';
        michal = {'loading': true, 'note': null};
        michal = golfie.bind(entity)(oscard, michal);
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    golfie['USER_NOTE_LOAD_START'] = michal;
    michal = 7;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    tangon = michal.NoteStoreExperiment;
    michal = tangon.getCachedKvStoreMode;
    yankee = michal.bind(tangon)();
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    foxtra = tangon;
    romeon = golfie;
    michal = new foxtra[option](romeon, yankee, offset);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/notes/NoteStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    michal = 'Note';
    zuuluu['NoteRecordTypeTag'] = michal;
    return entity;
})();