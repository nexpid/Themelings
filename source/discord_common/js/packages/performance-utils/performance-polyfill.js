// discord_common/js/packages/performance-utils/performance-polyfill.js
module.exports = (function(argFoo, argBar, argBaz, _, __, ___, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        tangon = argFoo;
        michal = global;
        zuuluu = michal.Date;
        zuuluu = zuuluu.now;
        oscard = michal.Date;
        if(zuuluu) { _fun00002_ip = 52; continue _fun00001 }
 27:
        zuuluu = oscard.prototype;
        report = Object.create(zuuluu, {constructor: {value: oscard}});
        offset = report;
        zuuluu = new offset[oscard](verify);
        zuuluu = zuuluu instanceof Object ? zuuluu : report;
        zuuluu = zuuluu - 0;
        _fun00002_ip = 61; continue _fun00001;
 52:
        report = oscard.now;
        zuuluu = report.bind(oscard)();
 61:
        var _closure1_slot0 = zuuluu;
        zuuluu = tangon.performance;
        if(zuuluu) { _fun00002_ip = 76; continue _fun00001 }
 74:
        zuuluu = {};
 76:
        var _closure1_slot1 = zuuluu;
        report = new Array(0);
        var _closure1_slot2 = report;
        report = {};
        var _closure1_slot3 = report;
        report = function(argFoo, argBar) { // Original name: u
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                oscard = argFoo;
                report = argBar;
                entity = _closure1_slot2;
                zuuluu = entity.length;
                entity = new Array(0);
                michal = 0;
                golfie = michal < zuuluu;
                if(!golfie) { _fun00004_ip = 72; continue _fun00003 }
 31:
                golfie = _closure1_slot2;
                golfie = golfie[michal];
                golfie = golfie[oscard];
                if(!(golfie == report)) { _fun00004_ip = 65; continue _fun00003 }
 47:
                option = entity.push;
                golfie = _closure1_slot2;
                golfie = golfie[michal];
                golfie = option.bind(entity)(golfie);
 65:
                michal = michal + 1;
                if(michal < zuuluu) { _fun00004_ip = 31; continue _fun00003 }
 72:
                return entity;
            }
        };
        var _closure1_slot4 = report;
        report = function(argFoo, argBar) { // Original name: f
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                option = argFoo;
                golfie = argBar;
                entity = _closure1_slot2;
                entity = entity.length;
                michal = parseFloat(entity);
                report = michal - 1;
                tangon = 1;
                entity = undefined;
                zuuluu = entity !== golfie;
                if(!michal) { _fun00006_ip = 103; continue _fun00005 }
 36:
                michal = _closure1_slot2;
                offset = michal[report];
                michal = offset.entryType;
                michal = michal != option;
                if(michal) { _fun00006_ip = 75; continue _fun00005 }
 57:
                verify = zuuluu;
                if(!verify) { _fun00006_ip = 72; continue _fun00005 }
 63:
                offset = offset.name;
                verify = offset != golfie;
 72:
                michal = verify;
 75:
                if(michal) { _fun00006_ip = 94; continue _fun00005 }
 78:
                verify = _closure1_slot2;
                michal = verify.splice;
                michal = michal.bind(verify)(report, tangon);
 94:
                michal = parseFloat(report);
                report = michal - 1;
                if(michal) { _fun00006_ip = 36; continue _fun00005 }
 103:
                return entity;
            }
        };
        var _closure1_slot5 = report;
        report = zuuluu.now;
        if(report) { _fun00002_ip = 158; continue _fun00001 }
 120:
        report = zuuluu.webkitNow;
        if(report) { _fun00002_ip = 135; continue _fun00001 }
 129:
        report = zuuluu.mozNow;
 135:
        if(report) { _fun00002_ip = 144; continue _fun00001 }
 138:
        report = zuuluu.msNow;
 144:
        if(report) { _fun00002_ip = 152; continue _fun00001 }
 147:
        report = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = global;
                entity = michal.Date;
                entity = entity.now;
                zuuluu = michal.Date;
                if(entity) { _fun00008_ip = 47; continue _fun00007 }
 22:
                entity = zuuluu.prototype;
                michal = Object.create(entity, {constructor: {value: zuuluu}});
                tangon = michal;
                entity = new tangon[zuuluu](zuuluu);
                entity = entity instanceof Object ? entity : michal;
                michal = entity - 0;
                _fun00008_ip = 56; continue _fun00007;
 47:
                entity = zuuluu.now;
                michal = entity.bind(zuuluu)();
 56:
                entity = _closure1_slot0;
                entity = michal - entity;
                return entity;
            }
        };
 152:
        zuuluu['now'] = report;
 158:
        report = zuuluu.mark;
        if(report) { _fun00002_ip = 187; continue _fun00001 }
 167:
        report = zuuluu.webkitMark;
        if(report) { _fun00002_ip = 181; continue _fun00001 }
 176:
        report = function(argFoo) {
            zuuluu = argFoo;
            michal = {};
            michal['name'] = zuuluu;
            entity = 'mark';
            michal['entryType'] = entity;
            report = _closure1_slot1;
            tangon = report.now;
            tangon = tangon.bind(report)();
            michal['startTime'] = tangon;
            tangon = 0;
            michal['duration'] = tangon;
            report = _closure1_slot2;
            tangon = report.push;
            tangon = tangon.bind(report)(michal);
            entity = _closure1_slot3;
            entity[zuuluu] = michal;
            entity = undefined;
            return entity;
        };
 181:
        zuuluu['mark'] = report;
 187:
        report = zuuluu.measure;
        if(report) { _fun00002_ip = 216; continue _fun00001 }
 196:
        report = zuuluu.webkitMeasure;
        if(report) { _fun00002_ip = 210; continue _fun00001 }
 205:
        report = function(argFoo, argBar, argBaz) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = argBar;
                michal = argBaz;
                entity = undefined;
                if(!(entity !== michal)) { _fun00010_ip = 30; continue _fun00009 }
 12:
                tangon = _closure1_slot3;
                tangon = tangon[michal];
                if(!(entity !== tangon)) { _fun00010_ip = 216; continue _fun00009 }
 30:
                if(!(entity !== zuuluu)) { _fun00010_ip = 49; continue _fun00009 }
 34:
                tangon = _closure1_slot3;
                tangon = tangon[zuuluu];
                if(!(entity !== tangon)) { _fun00010_ip = 166; continue _fun00009 }
 49:
                report = _closure1_slot3;
                report = report[zuuluu];
                option = 0;
                if(!report) { _fun00010_ip = 79; continue _fun00009 }
 65:
                report = _closure1_slot3;
                report = report[zuuluu];
                option = report.startTime;
 79:
                report = _closure1_slot3;
                report = report[michal];
                if(report) { _fun00010_ip = 105; continue _fun00009 }
 90:
                oscard = _closure1_slot1;
                report = oscard.now;
                golfie = report.bind(oscard)();
                _fun00010_ip = 119; continue _fun00009;
 105:
                report = _closure1_slot3;
                report = report[michal];
                golfie = report.startTime;
 119:
                oscard = _closure1_slot2;
                report = oscard.push;
                tangon = {};
                verify = argFoo;
                tangon['name'] = verify;
                verify = 'measure';
                tangon['entryType'] = verify;
                tangon['startTime'] = option;
                golfie = golfie - option;
                tangon['duration'] = golfie;
                tangon = report.bind(oscard)(tangon);
                return entity;
 166:
                entity = global;
                tangon = entity.SyntaxError;
                entity = "Failed to execute 'measure' on 'Performance': The mark '";
                report = entity + zuuluu;
                entity = tangon.prototype;
                zuuluu = Object.create(entity, {constructor: {value: tangon}});
                entity = "' does not exist.";
                offset = report + entity;
                yankee = zuuluu;
                entity = new yankee[tangon](offset, verify);
                entity = entity instanceof Object ? entity : zuuluu;
                throw entity;
 216:
                entity = global;
                zuuluu = entity.SyntaxError;
                entity = "Failed to execute 'measure' on 'Performance': The mark '";
                tangon = entity + michal;
                entity = zuuluu.prototype;
                michal = Object.create(entity, {constructor: {value: zuuluu}});
                entity = "' does not exist.";
                offset = tangon + entity;
                yankee = michal;
                entity = new yankee[zuuluu](offset, verify);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
 210:
        zuuluu['measure'] = report;
 216:
        report = zuuluu.getEntriesByType;
        if(report) { _fun00002_ip = 245; continue _fun00001 }
 225:
        report = zuuluu.webkitGetEntriesByType;
        if(report) { _fun00002_ip = 239; continue _fun00001 }
 234:
        report = function(argFoo) {
            tangon = _closure1_slot4;
            zuuluu = undefined;
            michal = 'entryType';
            entity = argFoo;
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
 239:
        zuuluu['getEntriesByType'] = report;
 245:
        report = zuuluu.getEntriesByName;
        if(report) { _fun00002_ip = 274; continue _fun00001 }
 254:
        report = zuuluu.webkitGetEntriesByName;
        if(report) { _fun00002_ip = 268; continue _fun00001 }
 263:
        report = function(argFoo) {
            tangon = _closure1_slot4;
            zuuluu = undefined;
            michal = 'name';
            entity = argFoo;
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
 268:
        zuuluu['getEntriesByName'] = report;
 274:
        report = zuuluu.clearMarks;
        if(report) { _fun00002_ip = 303; continue _fun00001 }
 283:
        report = zuuluu.webkitClearMarks;
        if(report) { _fun00002_ip = 297; continue _fun00001 }
 292:
        report = function(argFoo) {
            tangon = _closure1_slot5;
            entity = undefined;
            zuuluu = 'mark';
            michal = argFoo;
            michal = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
 297:
        zuuluu['clearMarks'] = report;
 303:
        report = zuuluu.clearMeasures;
        if(report) { _fun00002_ip = 332; continue _fun00001 }
 312:
        report = zuuluu.webkitClearMeasures;
        if(report) { _fun00002_ip = 326; continue _fun00001 }
 321:
        report = function(argFoo) {
            tangon = _closure1_slot5;
            entity = undefined;
            zuuluu = 'measure';
            michal = argFoo;
            michal = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
 326:
        zuuluu['clearMeasures'] = report;
 332:
        tangon['performance'] = zuuluu;
        zuuluu = michal.define;
        tangon = 'function';
        zuuluu = typeof zuuluu;
        zuuluu = tangon === zuuluu;
        if(!zuuluu) { _fun00002_ip = 388; continue _fun00001 }
 358:
        tangon = michal.define;
        tangon = tangon.amd;
        if(tangon) { _fun00002_ip = 385; continue _fun00001 }
 373:
        report = michal.define;
        tangon = report.ajs;
 385:
        zuuluu = tangon;
 388:
        if(!zuuluu) { _fun00002_ip = 419; continue _fun00001 }
 391:
        report = michal.define;
        tangon = undefined;
        zuuluu = 'performance';
        michal = new Array(0);
        entity = function() {
            entity = _closure1_slot1;
            return entity;
        };
        entity = report.bind(tangon)(zuuluu, michal, entity);
 419:
        michal = argPlu;
        entity = 0;
        zuuluu = michal[entity];
        michal = argBar;
        entity = undefined;
        tangon = michal.bind(entity)(zuuluu);
        zuuluu = tangon.fileFinishedImporting;
        michal = '../discord_common/js/packages/performance-utils/performance-polyfill.js';
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    }
})();