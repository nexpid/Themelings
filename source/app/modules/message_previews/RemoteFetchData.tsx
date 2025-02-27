// app/modules/message_previews/RemoteFetchData.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
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
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
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
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot5;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot5;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
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
 345:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot4 = entity;
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
    var _closure1_slot5 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    option = 0;
    tangon = oscard[option];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot0 = tangon;
    golfie = 1;
    tangon = oscard[golfie];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = {};
    tangon['Pending'] = option;
    report = 'Pending';
    tangon[option] = report;
    tangon['Fetching'] = golfie;
    report = 'Fetching';
    tangon[golfie] = report;
    var _closure1_slot3 = tangon;
    michal = function() {
        tangon = _closure1_slot2;
        zuuluu = function() { // Original name: RemoteFetchData
            zuuluu = this;
            tangon = _closure1_slot1;
            michal = _closure2_slot1;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = global;
            tangon = michal.Set;
            report = tangon.prototype;
            report = Object.create(report, {constructor: {value: tangon}});
            option = report;
            tangon = new option[tangon](golfie);
            tangon = tangon instanceof Object ? tangon : report;
            zuuluu['pending'] = tangon;
            michal = michal.Set;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            option = tangon;
            michal = new option[michal](golfie);
            michal = michal instanceof Object ? michal : tangon;
            zuuluu['fetching'] = michal;
            return entity;
        };
        var _closure2_slot1 = zuuluu;
        report = {};
        michal = 'empty';
        report['key'] = michal;
        michal = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = this;
                entity = michal.pending;
                entity = entity.size;
                zuuluu = 0;
                entity = zuuluu === entity;
                if(!entity) { _fun00008_ip = 38; continue _fun00007 }
 23:
                michal = michal.fetching;
                michal = michal.size;
                entity = zuuluu === michal;
 38:
                return entity;
            }
        };
        report['value'] = michal;
        michal = new Array(9);
        michal[0] = report;
        report = {};
        golfie = 'status';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = argFoo;
                entity = this;
                tangon = entity.pending;
                michal = tangon.has;
                michal = michal.bind(tangon)(zuuluu);
                if(michal) { _fun00010_ip = 61; continue _fun00009 }
 25:
                michal = entity.fetching;
                entity = michal.has;
                michal = entity.bind(michal)(zuuluu);
                entity = null;
                if(!michal) { _fun00010_ip = 59; continue _fun00009 }
 46:
                michal = _closure1_slot3;
                entity = michal.Fetching;
 59:
                _fun00010_ip = 74; continue _fun00009;
 61:
                michal = _closure1_slot3;
                entity = michal.Pending;
 74:
                return entity;
            }
        };
        report['value'] = golfie;
        michal[1] = report;
        report = {};
        golfie = 'addWant';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = argFoo;
                entity = this;
                tangon = entity.fetching;
                michal = tangon.has;
                michal = michal.bind(tangon)(zuuluu);
                if(michal) { _fun00012_ip = 41; continue _fun00011 }
 25:
                michal = entity.pending;
                entity = michal.add;
                entity = entity.bind(michal)(zuuluu);
 41:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        michal[2] = report;
        report = {};
        golfie = 'removeWant';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = argFoo;
            entity = this;
            tangon = entity.pending;
            michal = tangon.delete;
            michal = michal.bind(tangon)(zuuluu);
            michal = entity.fetching;
            entity = michal.delete;
            entity = entity.bind(michal)(zuuluu);
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        michal[3] = report;
        report = {};
        golfie = 'nextWants';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = this;
            golfie = entity.pending;
            entity = new Array(0);
            oscard = 0;
            option = entity;
            michal = arraySpread(option, golfie, oscard);
            michal = global;
            report = michal.Math;
            tangon = report.min;
            zuuluu = entity.length;
            michal = argFoo;
            michal = tangon.bind(report)(michal, zuuluu);
            entity['length'] = michal;
            return entity;
        };
        report['value'] = golfie;
        michal[4] = report;
        report = {};
        golfie = 'markFetching';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                report = this;
                zuuluu = _closure1_slot4;
                entity = undefined;
                michal = argFoo;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.bind(entity)();
                michal = zuuluu.done;
                if(michal) { _fun00014_ip = 84; continue _fun00013 }
 32:
                golfie = zuuluu.value;
                oscard = report.pending;
                michal = oscard.delete;
                michal = michal.bind(oscard)(golfie);
                oscard = report.fetching;
                michal = oscard.add;
                michal = michal.bind(oscard)(golfie);
                oscard = tangon.bind(entity)();
                michal = oscard.done;
                zuuluu = oscard;
                if(!michal) { _fun00014_ip = 32; continue _fun00013 }
 84:
                return entity;
            }
        };
        report['value'] = golfie;
        michal[5] = report;
        report = {};
        golfie = 'markCompleted';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                report = this;
                zuuluu = _closure1_slot4;
                entity = undefined;
                michal = argFoo;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.bind(entity)();
                michal = zuuluu.done;
                if(michal) { _fun00016_ip = 84; continue _fun00015 }
 32:
                golfie = zuuluu.value;
                oscard = report.pending;
                michal = oscard.delete;
                michal = michal.bind(oscard)(golfie);
                oscard = report.fetching;
                michal = oscard.delete;
                michal = michal.bind(oscard)(golfie);
                oscard = tangon.bind(entity)();
                michal = oscard.done;
                zuuluu = oscard;
                if(!michal) { _fun00016_ip = 32; continue _fun00015 }
 84:
                return entity;
            }
        };
        report['value'] = golfie;
        michal[6] = report;
        report = {};
        golfie = 'markFailed';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                report = this;
                zuuluu = _closure1_slot4;
                entity = undefined;
                michal = argFoo;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.bind(entity)();
                michal = zuuluu.done;
                if(michal) { _fun00018_ip = 84; continue _fun00017 }
 32:
                golfie = zuuluu.value;
                oscard = report.pending;
                michal = oscard.add;
                michal = michal.bind(oscard)(golfie);
                oscard = report.fetching;
                michal = oscard.delete;
                michal = michal.bind(oscard)(golfie);
                oscard = tangon.bind(entity)();
                michal = oscard.done;
                zuuluu = oscard;
                if(!michal) { _fun00018_ip = 32; continue _fun00017 }
 84:
                return entity;
            }
        };
        report['value'] = golfie;
        michal[7] = report;
        report = {};
        golfie = 'try';
        report['key'] = golfie;
        option = _closure1_slot0;
        entity = undefined;
        golfie = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    StartGenerator();
                    report = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tangon) { _fun00020_ip = 90; continue _fun00019 }
 10:
                    zuuluu = argFoo;
                    michal = argBar;
 16: // try_start_0
                    oscard = report.markFetching;
                    tangon = zuuluu;
                    tangon = oscard.bind(report)(tangon);
                    tangon = michal;
                    michal = undefined;
                    michal = tangon.bind(michal)();
                    SaveGenerator(address=45);
 43:
                    return michal;
 45:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00020_ip = 70; continue _fun00019 }
 51:
                    oscard = report.markCompleted;
                    tangon = zuuluu;
                    tangon = oscard.bind(report)(tangon);
 67: // try_end0
                    return michal;
 70:
                    return michal;
 73: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tangon = report.markFailed;
                    zuuluu = tangon.bind(report)(zuuluu);
                    throw michal;
 90:
                    return entity;
                }
            };
            return entity;
        };
        golfie = option.bind(entity)(golfie);
        var _closure2_slot0 = golfie;
        oscard = function() { // Original name: _try
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = oscard;
        michal[8] = report;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    report = 3;
    oscard = oscard[report];
    report = argBar;
    golfie = report.bind(entity)(oscard);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/message_previews/RemoteFetchData.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['FetchStatus'] = tangon;
    zuuluu['RemoteFetchData'] = michal;
    return entity;
})();