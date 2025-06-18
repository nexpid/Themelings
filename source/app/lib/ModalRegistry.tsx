// app/lib/ModalRegistry.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 344; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot3;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot3;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 344:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot2 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    michal = function() {
        tangon = _closure1_slot1;
        zuuluu = function(argFoo) { // Original name: ModalRegistry
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                oscard = argFoo;
                zuuluu = this;
                tangon = _closure1_slot0;
                michal = _closure2_slot0;
                entity = undefined;
                michal = tangon.bind(entity)(zuuluu, michal);
                zuuluu['modals'] = oscard;
                michal = global;
                tangon = michal.Set;
                report = tangon.prototype;
                report = Object.create(report, {constructor: {value: tangon}});
                backup = report;
                tangon = new backup[tangon](foxtra);
                report = tangon instanceof Object ? tangon : report;
                tangon = _closure1_slot2;
                golfie = tangon.bind(entity)(oscard);
                oscard = golfie.bind(entity)();
                tangon = oscard.done;
                if(tangon) { _fun00008_ip = 160; continue _fun00007 }
 83:
                verify = _closure1_slot2;
                tangon = oscard.value;
                tangon = tangon.stores;
                offset = verify.bind(entity)(tangon);
                verify = offset.bind(entity)();
                tangon = verify.done;
                if(tangon) { _fun00008_ip = 145; continue _fun00007 }
 115:
                yankee = verify.value;
                tangon = report.add;
                tangon = tangon.bind(report)(yankee);
                yankee = offset.bind(entity)();
                tangon = yankee.done;
                verify = yankee;
                if(!tangon) { _fun00008_ip = 115; continue _fun00007 }
 145:
                verify = golfie.bind(entity)();
                tangon = verify.done;
                oscard = verify;
                if(!tangon) { _fun00008_ip = 83; continue _fun00007 }
 160:
                tangon = michal.Array;
                michal = tangon.from;
                michal = michal.bind(tangon)(report);
                zuuluu['stores'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'getStores';
        entity['key'] = michal;
        michal = function() { // Original name: value
            entity = this;
            entity = entity.stores;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(2);
        michal[0] = entity;
        entity = {};
        oscard = 'getOpenModal';
        entity['key'] = oscard;
        report = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = this;
                tangon = entity.modals;
                zuuluu = tangon.findIndex;
                michal = function(argFoo) {
                    michal = argFoo;
                    entity = michal.isOpen;
                    entity = entity.bind(michal)();
                    return entity;
                };
                report = zuuluu.bind(tangon)(michal);
                michal = -1;
                if(!(michal !== report)) { _fun00010_ip = 195; continue _fun00009 }
 42:
                entity = entity.modals;
                zuuluu = entity[report];
                entity = zuuluu.getProps;
                tangon = null;
                entity = tangon == entity;
                michal = undefined;
                if(entity) { _fun00010_ip = 79; continue _fun00009 }
 69:
                entity = zuuluu.getProps;
                michal = entity.bind(zuuluu)();
 79:
                if(!(tangon == michal)) { _fun00010_ip = 85; continue _fun00009 }
 83:
                michal = {};
 85:
                entity = {};
                entity['key'] = report;
                report = zuuluu.getComponent;
                report = report.bind(zuuluu)();
                entity['component'] = report;
                entity['props'] = michal;
                michal = zuuluu.closable;
                michal = tangon == michal;
                if(michal) { _fun00010_ip = 129; continue _fun00009 }
 123:
                michal = zuuluu.closable;
 129:
                entity['closable'] = michal;
                michal = zuuluu.backdropInstant;
                michal = tangon != michal;
                if(!michal) { _fun00010_ip = 153; continue _fun00009 }
 147:
                michal = zuuluu.backdropInstant;
 153:
                entity['backdropInstant'] = michal;
                michal = zuuluu.backdropStyle;
                entity['backdropStyle'] = michal;
                michal = zuuluu.disableAnimation;
                michal = tangon != michal;
                if(!michal) { _fun00010_ip = 188; continue _fun00009 }
 182:
                michal = zuuluu.disableAnimation;
 188:
                entity['disableAnimation'] = michal;
                return entity;
 195:
                entity = null;
                return entity;
            }
        };
        entity['value'] = report;
        michal[1] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 2;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/ModalRegistry.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();