// app/stores/SnapshotStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot9;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot9 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.Store;
    michal = function(argFoo) {
        report = function(argFoo, argBar) { // Original name: SnapshotStore
            tangon = argFoo;
            yankee = this;
            zuuluu = _closure1_slot3;
            michal = _closure2_slot0;
            oscard = undefined;
            zuuluu = zuuluu.bind(oscard)(yankee, michal);
            offset = _closure1_slot8;
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            entity = 5;
            entity = option[entity];
            zuuluu = golfie.bind(oscard)(entity);
            entity = new Array(3);
            entity[0] = zuuluu;
            romeon = {};
            sizing = romeon;
            kiloes = tangon;
            zuuluu = copyDataProperties(sizing, kiloes);
            zuuluu = function() { // Original name: CLEAR_CACHES
                michal = _closure3_slot0;
                entity = michal.clear;
                entity = entity.bind(michal)();
                entity = false;
                return entity;
            };
            verify = 'CLEAR_CACHES';
            romeon[verify] = zuuluu;
            foxtra = function() { // Original name: WRITE_CACHES
                michal = _closure3_slot0;
                entity = michal.save;
                entity = entity.bind(michal)();
                entity = false;
                return entity;
            };
            zuuluu = 'WRITE_CACHES';
            romeon[zuuluu] = foxtra;
            entity[1] = romeon;
            romeon = argBar;
            entity[2] = romeon;
            entity = offset.bind(oscard)(yankee, michal, entity);
            var _closure3_slot0 = entity;
            report = 6;
            offset = option[report];
            romeon = golfie.bind(oscard)(offset);
            offset = entity.getClass;
            offset = offset.bind(entity)();
            yankee = offset.displayName;
            offset = null;
            yankee = offset != yankee;
            offset = 'Snapshot stores need a display name';
            offset = romeon.bind(oscard)(yankee, offset);
            offset = option[report];
            yankee = golfie.bind(oscard)(offset);
            verify = verify in tangon;
            offset = !verify;
            verify = "SnapshotStores cannot use the 'CLEAR_CACHES' action";
            verify = yankee.bind(oscard)(offset, verify);
            report = option[report];
            report = golfie.bind(oscard)(report);
            zuuluu = zuuluu in tangon;
            tangon = !zuuluu;
            zuuluu = "SnapshotStores cannot use the 'WRITE_CACHES' action";
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            zuuluu = michal.allStores;
            michal = zuuluu.push;
            michal = michal.bind(zuuluu)(entity);
            return entity;
        };
        var _closure2_slot0 = report;
        oscard = _closure1_slot7;
        tangon = undefined;
        zuuluu = argFoo;
        zuuluu = oscard.bind(tangon)(report, zuuluu);
        zuuluu = _closure1_slot4;
        oscard = {};
        michal = 'persistKey';
        oscard['key'] = michal;
        michal = function() { // Original name: get
            michal = this;
            entity = michal.getClass;
            entity = entity.bind(michal)();
            tangon = entity.displayName;
            entity = global;
            entity = entity.HermesInternal;
            zuuluu = entity.concat;
            michal = '';
            entity = '-snapshot';
            entity = zuuluu.bind(michal)(tangon, entity);
            return entity;
        };
        oscard['get'] = michal;
        michal = new Array(5);
        michal[0] = oscard;
        oscard = {};
        golfie = 'clear';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            tangon = michal.Storage;
            zuuluu = tangon.remove;
            michal = this;
            michal = michal.persistKey;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        oscard['value'] = golfie;
        michal[1] = oscard;
        oscard = {};
        golfie = 'save';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            oscard = this;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            report = michal.Storage;
            tangon = report.set;
            zuuluu = oscard.persistKey;
            michal = oscard.takeSnapshot;
            michal = michal.bind(oscard)();
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        oscard['value'] = golfie;
        michal[2] = oscard;
        oscard = {};
        golfie = 'readSnapshot';
        oscard['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 7;
                michal = michal[entity];
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                zuuluu = entity.Storage;
                michal = zuuluu.get;
                entity = this;
                entity = entity.persistKey;
                michal = michal.bind(zuuluu)(entity);
                report = null;
                zuuluu = report == michal;
                entity = null;
                if(zuuluu) { _fun00006_ip = 81; continue _fun00005 }
 61:
                tangon = michal.version;
                zuuluu = argFoo;
                entity = null;
                if(!(tangon === zuuluu)) { _fun00006_ip = 81; continue _fun00005 }
 76:
                entity = michal.data;
 81:
                return entity;
            }
        };
        oscard['value'] = golfie;
        michal[3] = oscard;
        oscard = {};
        golfie = 'getClass';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            entity = this;
            entity = entity.constructor;
            return entity;
        };
        oscard['value'] = golfie;
        michal[4] = oscard;
        oscard = {};
        golfie = 'clearAll';
        oscard['key'] = golfie;
        entity = function() { // Original name: value
            entity = _closure2_slot0;
            zuuluu = entity.allStores;
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                michal = argFoo;
                entity = michal.clear;
                entity = entity.bind(michal)();
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        oscard['value'] = entity;
        entity = new Array(1);
        entity[0] = oscard;
        entity = zuuluu.bind(tangon)(report, michal, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = new Array(0);
    michal['allStores'] = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/SnapshotStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();