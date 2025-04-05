// app/modules/queries/ArraySearch.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
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
            verify = _closure1_slot1;
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
            golfie = _closure1_slot1;
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
    var _closure1_slot0 = entity;
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
    var _closure1_slot1 = entity;
    entity = function(argFoo, argBar) { // Original name: sortGroup
        zuuluu = argFoo;
        michal = argBar;
        var _closure2_slot0 = michal;
        michal = zuuluu.sort;
        entity = function(argFoo, argBar) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                option = argFoo;
                golfie = argBar;
                michal = _closure1_slot0;
                entity = _closure2_slot0;
                oscard = undefined;
                report = michal.bind(oscard)(entity);
                zuuluu = report.bind(oscard)();
                michal = zuuluu.done;
                entity = 0;
                tangon = zuuluu;
                if(michal) { _fun00008_ip = 78; continue _fun00007 }
 44:
                michal = tangon.value;
                michal = michal.bind(oscard)(option, golfie);
                if(!(entity === michal)) { _fun00008_ip = 76; continue _fun00007 }
 59:
                verify = report.bind(oscard)();
                zuuluu = verify.done;
                tangon = verify;
                if(zuuluu) { _fun00008_ip = 78; continue _fun00007 }
 74:
                _fun00008_ip = 44; continue _fun00007;
 76:
                return michal;
 78:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot2 = entity;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    tangon = argPlu;
    entity = 0;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/queries/ArraySearch.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: queryData
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = argBar;
            michal = zuuluu.limit;
            entity = null;
            report = entity != michal;
            tangon = inf;
            if(!report) { _fun00010_ip = 33; continue _fun00009 }
 30:
            tangon = michal;
 33:
            golfie = zuuluu.filterPredicates;
            if(!(entity == golfie)) { _fun00010_ip = 47; continue _fun00009 }
 43:
            golfie = new Array(0);
 47:
            report = function(argFoo, argBar) { // Original name: applyFilters
                zuuluu = argFoo;
                michal = argBar;
                var _closure3_slot0 = michal;
                michal = zuuluu.filter;
                entity = function(argFoo) {
                    michal = argFoo;
                    var _closure4_slot0 = michal;
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.every;
                    entity = function(argFoo) {
                        zuuluu = _closure4_slot0;
                        michal = argFoo;
                        entity = undefined;
                        entity = michal.bind(entity)(zuuluu);
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            verify = undefined;
            michal = argFoo;
            option = report.bind(verify)(michal, golfie);
            michal = zuuluu.bucketPredicates;
            if(!(entity != michal)) { _fun00010_ip = 92; continue _fun00009 }
 75:
            michal = zuuluu.bucketPredicates;
            report = michal.length;
            michal = 0;
            if(!(!(report > michal))) { _fun00010_ip = 102; continue _fun00009 }
 92:
            michal = new Array(1);
            michal[0] = option;
            _fun00010_ip = 171; continue _fun00009;
 102:
            report = option.length;
            if(!(!(tangon >= report))) { _fun00010_ip = 141; continue _fun00009 }
 111:
            golfie = zuuluu.bucketPredicates;
            if(!(entity == golfie)) { _fun00010_ip = 125; continue _fun00009 }
 121:
            golfie = new Array(0);
 125:
            report = function(argFoo, argBar, argBaz) { // Original name: applyBucketing
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    offset = argFoo;
                    verify = argBaz;
                    entity = new Array(0);
                    zuuluu = _closure1_slot0;
                    golfie = undefined;
                    michal = argBar;
                    oscard = zuuluu.bind(golfie)(michal);
                    zuuluu = oscard.bind(golfie)();
                    michal = zuuluu.done;
                    report = 0;
                    tangon = zuuluu;
                    zuuluu = undefined;
                    if(michal) { _fun00012_ip = 192; continue _fun00011 }
 51:
                    sizing = tangon.value;
                    romeon = new Array(0);
                    foxtra = new Array(0);
                    michal = _closure1_slot0;
                    kiloes = michal.bind(golfie)(offset);
                    backup = kiloes.bind(golfie)();
                    michal = backup.done;
                    if(michal) { _fun00012_ip = 138; continue _fun00011 }
 85:
                    output = backup.value;
                    michal = sizing.bind(golfie)(output);
                    if(michal) { _fun00012_ip = 110; continue _fun00011 }
 98:
                    michal = romeon.push;
                    michal = michal.bind(romeon)(output);
                    _fun00012_ip = 120; continue _fun00011;
 110:
                    michal = foxtra.push;
                    michal = michal.bind(foxtra)(output);
 120:
                    result = kiloes.bind(golfie)();
                    michal = result.done;
                    backup = result;
                    zuuluu = output;
                    if(!michal) { _fun00012_ip = 85; continue _fun00011 }
 138:
                    michal = entity.push;
                    michal = michal.bind(entity)(foxtra);
                    foxtra = entity.reduce;
                    michal = function(argFoo, argBar) {
                        entity = argBar;
                        michal = entity.length;
                        entity = argFoo;
                        entity = michal + entity;
                        return entity;
                    };
                    michal = foxtra.bind(entity)(michal, report);
                    if(!(!(michal >= verify))) { _fun00012_ip = 192; continue _fun00011 }
 171:
                    foxtra = oscard.bind(golfie)();
                    michal = foxtra.done;
                    tangon = foxtra;
                    offset = romeon;
                    if(!michal) { _fun00012_ip = 51; continue _fun00011 }
 192:
                    return entity;
                }
            };
            report = report.bind(verify)(option, golfie, tangon);
            _fun00010_ip = 168; continue _fun00009;
 141:
            golfie = zuuluu.bucketPredicates;
            if(!(entity == golfie)) { _fun00010_ip = 155; continue _fun00009 }
 151:
            golfie = new Array(0);
 155:
            oscard = function(argFoo, argBar) { // Original name: applyBucketingSingleIteration
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    golfie = argBar;
                    entity = global;
                    zuuluu = entity.Array;
                    yankee = golfie.length;
                    michal = zuuluu.prototype;
                    michal = Object.create(michal, {constructor: {value: zuuluu}});
                    romeon = michal;
                    entity = new romeon[zuuluu](yankee, offset);
                    zuuluu = entity instanceof Object ? entity : michal;
                    michal = zuuluu.fill;
                    entity = null;
                    zuuluu = michal.bind(zuuluu)(entity);
                    michal = zuuluu.map;
                    entity = function() {
                        entity = new Array(0);
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    zuuluu = _closure1_slot0;
                    oscard = undefined;
                    michal = argFoo;
                    report = zuuluu.bind(oscard)(michal);
                    zuuluu = report.bind(oscard)();
                    michal = zuuluu.done;
                    tangon = 0;
                    if(michal) { _fun00014_ip = 176; continue _fun00013 }
 99:
                    verify = zuuluu.value;
                    michal = golfie.length;
                    michal = tangon < michal;
                    offset = 0;
                    if(!michal) { _fun00014_ip = 161; continue _fun00013 }
 118:
                    michal = golfie[offset];
                    option = michal.bind(golfie)(verify);
                    michal = offset;
                    if(option) { _fun00014_ip = 147; continue _fun00013 }
 133:
                    offset = michal + 1;
                    option = golfie.length;
                    if(offset < option) { _fun00014_ip = 118; continue _fun00013 }
 145:
                    _fun00014_ip = 161; continue _fun00013;
 147:
                    option = entity[michal];
                    michal = option.push;
                    michal = michal.bind(option)(verify);
 161:
                    option = report.bind(oscard)();
                    michal = option.done;
                    zuuluu = option;
                    if(!michal) { _fun00014_ip = 99; continue _fun00013 }
 176:
                    return entity;
                }
            };
            report = oscard.bind(verify)(option, golfie);
 168:
            michal = report;
 171:
            option = zuuluu.sortComparers;
            if(!(entity == option)) { _fun00010_ip = 185; continue _fun00009 }
 181:
            option = new Array(0);
 185:
            zuuluu = new Array(0);
            entity = _closure1_slot0;
            oscard = entity.bind(verify)(michal);
            report = oscard.bind(verify)();
            entity = report.done;
            michal = 0;
            if(entity) { _fun00010_ip = 285; continue _fun00009 }
 215:
            offset = _closure1_slot2;
            entity = report.value;
            foxtra = offset.bind(verify)(entity, option);
            offset = zuuluu.push;
            entity = new Array(0);
            backup = entity;
            romeon = 0;
            yankee = arraySpread(backup, foxtra, romeon);
            backup = offset;
            foxtra = entity;
            romeon = zuuluu;
            entity = apply(backup, foxtra, romeon);
            entity = zuuluu.length;
            if(!(!(entity >= tangon))) { _fun00010_ip = 285; continue _fun00009 }
 270:
            offset = oscard.bind(verify)();
            entity = offset.done;
            report = offset;
            if(!entity) { _fun00010_ip = 215; continue _fun00009 }
 285:
            entity = zuuluu.slice;
            entity = entity.bind(zuuluu)(michal, tangon);
            return entity;
        }
    };
    zuuluu['queryData'] = michal;
    return entity;
})();