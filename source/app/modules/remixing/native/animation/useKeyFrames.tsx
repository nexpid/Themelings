// app/modules/remixing/native/animation/useKeyFrames.tsx
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
    tangon = function(argFoo) { // Original name: getValue
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = 'current';
            entity = entity in michal;
            if(entity) { _fun00002_ip = 21; continue _fun00001 }
 14:
            entity = michal.value;
            _fun00002_ip = 26; continue _fun00001;
 21:
            entity = michal.current;
 26:
            return entity;
        }
    };
    var _closure1_slot4 = tangon;
    tangon = function(argFoo, argBar) { // Original name: setValue
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            entity = argBar;
            zuuluu = 'current';
            zuuluu = zuuluu in michal;
            if(!zuuluu) { _fun00004_ip = 23; continue _fun00003 }
 17:
            michal['current'] = entity;
 23:
            zuuluu = 'value';
            zuuluu = zuuluu in michal;
            if(!zuuluu) { _fun00004_ip = 40; continue _fun00003 }
 34:
            michal['value'] = entity;
 40:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot5 = tangon;
    tangon = function(argFoo) { // Original name: getLastFrame
        michal = argFoo;
        zuuluu = michal.length;
        entity = 1;
        entity = zuuluu - entity;
        entity = michal[entity];
        michal = entity.timing;
        entity = entity.duration;
        entity = michal + entity;
        return entity;
    };
    var _closure1_slot6 = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: animateProperty
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            tangon = argBar;
            verify = argBaz;
            option = argCor;
            var _closure2_slot0 = zuuluu;
            var _closure2_slot1 = option;
            michal = zuuluu.reduce;
            entity = function(argFoo, argBar, argBaz) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    tangon = argBar;
                    report = _closure2_slot1;
                    michal = tangon.timing;
                    if(!(report >= michal)) { _fun00008_ip = 72; continue _fun00007 }
 23:
                    michal = {};
                    golfie = michal;
                    oscard = tangon;
                    tangon = copyDataProperties(golfie, oscard);
                    tangon = _closure2_slot0;
                    report = argBaz;
                    zuuluu = 1;
                    zuuluu = report - zuuluu;
                    zuuluu = tangon[zuuluu];
                    tangon = zuuluu.value;
                    zuuluu = 'previousValue';
                    michal[zuuluu] = tangon;
                    entity = michal;
 72:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            zuuluu = entity.value;
            report = entity.timing;
            golfie = entity.duration;
            offset = entity.previousValue;
            oscard = entity.easing;
            entity = undefined;
            if(!(entity === oscard)) { _fun00006_ip = 109; continue _fun00005 }
 74:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            michal = 1;
            michal = romeon[michal];
            michal = yankee.bind(entity)(michal);
            michal = michal.Easing;
            oscard = michal.linear;
 109:
            if(!(!(report > option))) { _fun00006_ip = 281; continue _fun00005 }
 116:
            michal = global;
            foxtra = michal.Math;
            romeon = foxtra.abs;
            yankee = _closure1_slot4;
            yankee = yankee.bind(entity)(tangon);
            yankee = zuuluu - yankee;
            romeon = romeon.bind(foxtra)(yankee);
            yankee = 0.001;
            if(!(!(romeon > yankee))) { _fun00006_ip = 190; continue _fun00005 }
 165:
            yankee = _closure1_slot4;
            yankee = yankee.bind(entity)(tangon);
            if(!(zuuluu !== yankee)) { _fun00006_ip = 281; continue _fun00005 }
 178:
            yankee = _closure1_slot5;
            yankee = yankee.bind(entity)(tangon, zuuluu);
            _fun00006_ip = 281; continue _fun00005;
 190:
            yankee = null;
            if(!(yankee != offset)) { _fun00006_ip = 199; continue _fun00005 }
 196:
            verify = offset;
 199:
            offset = golfie + report;
            yankee = offset - option;
            offset = 0;
            if(!(!(yankee < offset))) { _fun00006_ip = 271; continue _fun00005 }
 213:
            report = option - report;
            report = report / golfie;
            option = oscard.bind(entity)(report);
            oscard = _closure1_slot5;
            golfie = _closure1_slot0;
            offset = _closure1_slot2;
            report = 2;
            report = offset[report];
            golfie = golfie.bind(entity)(report);
            report = golfie.LERP;
            report = report.bind(golfie)(verify, zuuluu, option);
            report = oscard.bind(entity)(tangon, report);
            _fun00006_ip = 281; continue _fun00005;
 271:
            michal = _closure1_slot5;
            michal = michal.bind(entity)(tangon, zuuluu);
 281:
            return entity;
        }
    };
    var _closure1_slot7 = tangon;
    tangon = {'autoplay': true, 'delay': 0, 'loop': false};
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/remixing/native/animation/useKeyFrames.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: _default
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            output = argFoo;
            kiloes = argBar;
            oscard = arguments[2];
            var _closure2_slot0 = output;
            var _closure2_slot1 = kiloes;
            report = undefined;
            if(!(oscard === report)) { _fun00010_ip = 27; continue _fun00009 }
 25:
            oscard = {};
 27:
            var _closure2_slot2 = report;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            var _closure2_slot7 = report;
            var _closure2_slot8 = report;
            var _closure2_slot9 = report;
            var _closure2_slot10 = report;
            var _closure2_slot11 = report;
            var _closure2_slot12 = report;
            var _closure2_slot13 = report;
            var _closure2_slot14 = report;
            michal = function() { // Original name: stop
                zuuluu = _closure2_slot12;
                michal = false;
                zuuluu['current'] = michal;
                michal = _closure2_slot7;
                entity = michal.stop;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            var _closure2_slot15 = michal;
            tangon = _closure1_slot3;
            offset = tangon.useReducedMotion;
            tangon = {};
            result = _closure1_slot8;
            echoed = tangon;
            golfie = copyDataProperties(echoed, result);
            echoed = tangon;
            result = oscard;
            oscard = copyDataProperties(echoed, result);
            backup = tangon.autoplay;
            oscard = tangon.delay;
            _closure2_slot2 = oscard;
            oscard = tangon.loop;
            _closure2_slot3 = oscard;
            oscard = tangon.loops;
            _closure2_slot4 = oscard;
            oscard = tangon.callback;
            _closure2_slot5 = oscard;
            romeon = tangon.reducedMotionFreezePercent;
            _closure2_slot6 = romeon;
            foxtra = _closure1_slot0;
            sizing = _closure1_slot2;
            golfie = 3;
            tangon = sizing[golfie];
            oscard = foxtra.bind(report)(tangon);
            tangon = oscard.useClockValue;
            oscard = tangon.bind(oscard)();
            _closure2_slot7 = oscard;
            tangon = sizing[golfie];
            verify = foxtra.bind(report)(tangon);
            option = verify.useValue;
            tangon = -1;
            tangon = option.bind(verify)(tangon);
            _closure2_slot8 = tangon;
            tangon = sizing[golfie];
            verify = foxtra.bind(report)(tangon);
            option = verify.useValue;
            yankee = output.map;
            tangon = function(argFoo) {
                zuuluu = _closure1_slot4;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            tangon = yankee.bind(output)(tangon);
            tangon = option.bind(verify)(tangon);
            _closure2_slot9 = tangon;
            tangon = sizing[golfie];
            option = foxtra.bind(report)(tangon);
            tangon = option.useValue;
            verify = false;
            tangon = tangon.bind(option)(verify);
            _closure2_slot10 = tangon;
            tangon = sizing[golfie];
            option = foxtra.bind(report)(tangon);
            tangon = option.useValue;
            yankee = 0;
            tangon = tangon.bind(option)(yankee);
            _closure2_slot11 = tangon;
            tangon = sizing[golfie];
            option = foxtra.bind(report)(tangon);
            tangon = option.useValue;
            option = tangon.bind(option)(backup);
            _closure2_slot12 = option;
            tangon = sizing[golfie];
            foxtra = foxtra.bind(report)(tangon);
            tangon = foxtra.useValue;
            tangon = tangon.bind(foxtra)(kiloes);
            _closure2_slot13 = tangon;
            backup = _closure1_slot1;
            foxtra = 4;
            foxtra = sizing[foxtra];
            backup = backup.bind(report)(foxtra);
            foxtra = function() {
                entity = function() {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        michal = _closure2_slot8;
                        zuuluu = null;
                        if(!(zuuluu != michal)) { _fun00012_ip = 27; continue _fun00011 }
 13:
                        tangon = _closure2_slot8;
                        michal = tangon.dispose;
                        michal = michal.bind(tangon)();
 27:
                        michal = _closure2_slot10;
                        if(!(zuuluu != michal)) { _fun00012_ip = 49; continue _fun00011 }
 35:
                        tangon = _closure2_slot10;
                        michal = tangon.dispose;
                        michal = michal.bind(tangon)();
 49:
                        michal = _closure2_slot11;
                        if(!(zuuluu != michal)) { _fun00012_ip = 71; continue _fun00011 }
 57:
                        tangon = _closure2_slot11;
                        michal = tangon.dispose;
                        michal = michal.bind(tangon)();
 71:
                        michal = _closure2_slot12;
                        if(!(zuuluu != michal)) { _fun00012_ip = 93; continue _fun00011 }
 79:
                        tangon = _closure2_slot12;
                        michal = tangon.dispose;
                        michal = michal.bind(tangon)();
 93:
                        michal = _closure2_slot13;
                        if(!(zuuluu != michal)) { _fun00012_ip = 115; continue _fun00011 }
 101:
                        michal = _closure2_slot13;
                        entity = michal.dispose;
                        entity = entity.bind(michal)();
 115:
                        entity = undefined;
                        return entity;
                    }
                };
                return entity;
            };
            foxtra = backup.bind(report)(foxtra);
            backup = kiloes.reduce;
            foxtra = _closure1_slot6;
            yankee = kiloes[yankee];
            foxtra = foxtra.bind(report)(yankee);
            yankee = function(argFoo, argBar) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = argFoo;
                    tangon = _closure1_slot6;
                    zuuluu = undefined;
                    michal = argBar;
                    michal = tangon.bind(zuuluu)(michal);
                    if(!(michal > entity)) { _fun00014_ip = 27; continue _fun00013 }
 24:
                    entity = michal;
 27:
                    return entity;
                }
            };
            yankee = backup.bind(kiloes)(yankee, foxtra);
            _closure2_slot14 = yankee;
            if(!offset) { _fun00010_ip = 452; continue _fun00009 }
 446:
            yankee = null;
            offset = yankee != romeon;
 452:
            if(!offset) { _fun00010_ip = 491; continue _fun00009 }
 455:
            option['current'] = verify;
            option = oscard.stop;
            option = option.bind(oscard)();
            verify = tangon.current;
            option = verify.forEach;
            tangon = function(argFoo, argBar) {
                zuuluu = argBar;
                oscard = _closure1_slot7;
                michal = _closure2_slot0;
                verify = michal[zuuluu];
                michal = _closure2_slot9;
                michal = michal.current;
                option = michal[zuuluu];
                michal = _closure2_slot14;
                entity = _closure2_slot6;
                golfie = michal * entity;
                entity = undefined;
                offset = argFoo;
                yankee = undefined;
                michal = yankee[oscard](offset, verify, option, golfie, oscard);
                return entity;
            };
            tangon = option.bind(verify)(tangon);
 491:
            tangon = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[golfie];
            report = tangon.bind(report)(entity);
            tangon = report.useValueEffect;
            entity = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zuuluu = _closure2_slot12;
                    zuuluu = zuuluu.current;
                    tangon = false;
                    if(!(tangon === zuuluu)) { _fun00016_ip = 39; continue _fun00015 }
 20:
                    report = _closure2_slot7;
                    zuuluu = report.stop;
                    zuuluu = zuuluu.bind(report)();
                    _fun00016_ip = 407; continue _fun00015;
 39:
                    zuuluu = _closure2_slot8;
                    report = zuuluu.current;
                    zuuluu = -1;
                    if(!(zuuluu === report)) { _fun00016_ip = 77; continue _fun00015 }
 58:
                    report = _closure2_slot8;
                    zuuluu = _closure2_slot7;
                    zuuluu = zuuluu.current;
                    report['current'] = zuuluu;
 77:
                    zuuluu = _closure2_slot7;
                    report = zuuluu.current;
                    zuuluu = _closure2_slot8;
                    zuuluu = zuuluu.current;
                    report = report - zuuluu;
                    var _closure3_slot0 = report;
                    zuuluu = _closure2_slot10;
                    zuuluu = zuuluu.current;
                    if(!(tangon === zuuluu)) { _fun00016_ip = 127; continue _fun00015 }
 116:
                    zuuluu = _closure2_slot2;
                    if(!(!(report < zuuluu))) { _fun00016_ip = 407; continue _fun00015 }
 127:
                    oscard = _closure2_slot14;
                    zuuluu = _closure2_slot10;
                    golfie = zuuluu.current;
                    tangon = 0;
                    if(golfie) { _fun00016_ip = 149; continue _fun00015 }
 145:
                    tangon = _closure2_slot2;
 149:
                    tangon = oscard + tangon;
                    if(!(!(report > tangon))) { _fun00016_ip = 208; continue _fun00015 }
 157:
                    tangon = _closure2_slot10;
                    tangon = tangon.current;
                    zuuluu = 0;
                    if(tangon) { _fun00016_ip = 175; continue _fun00015 }
 171:
                    zuuluu = _closure2_slot2;
 175:
                    var _closure3_slot1 = zuuluu;
                    zuuluu = _closure2_slot13;
                    report = zuuluu.current;
                    tangon = report.forEach;
                    zuuluu = function(argFoo, argBar) {
                        michal = argBar;
                        oscard = _closure1_slot7;
                        zuuluu = _closure2_slot0;
                        verify = zuuluu[michal];
                        entity = _closure2_slot9;
                        entity = entity.current;
                        option = entity[michal];
                        michal = _closure3_slot0;
                        entity = _closure3_slot1;
                        golfie = michal - entity;
                        entity = undefined;
                        offset = argFoo;
                        yankee = undefined;
                        michal = yankee[oscard](offset, verify, option, golfie, oscard);
                        return entity;
                    };
                    zuuluu = tangon.bind(report)(zuuluu);
                    _fun00016_ip = 407; continue _fun00015;
 208:
                    zuuluu = _closure2_slot3;
                    if(zuuluu) { _fun00016_ip = 274; continue _fun00015 }
 215:
                    zuuluu = _closure2_slot13;
                    report = zuuluu.current;
                    tangon = report.forEach;
                    zuuluu = function(argFoo, argBar) {
                        zuuluu = argBar;
                        oscard = _closure1_slot7;
                        michal = _closure2_slot0;
                        verify = michal[zuuluu];
                        michal = _closure2_slot9;
                        michal = michal.current;
                        option = michal[zuuluu];
                        golfie = _closure2_slot14;
                        entity = undefined;
                        offset = argFoo;
                        yankee = undefined;
                        michal = yankee[oscard](offset, verify, option, golfie, oscard);
                        return entity;
                    };
                    zuuluu = tangon.bind(report)(zuuluu);
                    tangon = _closure2_slot5;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00016_ip = 259; continue _fun00015 }
 249:
                    tangon = _closure2_slot5;
                    zuuluu = undefined;
                    zuuluu = tangon.bind(zuuluu)();
 259:
                    tangon = _closure2_slot15;
                    zuuluu = undefined;
                    zuuluu = tangon.bind(zuuluu)();
                    _fun00016_ip = 407; continue _fun00015;
 274:
                    tangon = _closure2_slot8;
                    zuuluu = _closure2_slot7;
                    zuuluu = zuuluu.current;
                    tangon['current'] = zuuluu;
                    tangon = _closure2_slot0;
                    zuuluu = tangon.forEach;
                    michal = function(argFoo, argBar) {
                        tangon = _closure1_slot5;
                        entity = _closure2_slot9;
                        michal = entity.current;
                        entity = argBar;
                        zuuluu = michal[entity];
                        entity = undefined;
                        michal = argFoo;
                        michal = tangon.bind(entity)(michal, zuuluu);
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = _closure2_slot10;
                    michal = true;
                    zuuluu['current'] = michal;
                    zuuluu = _closure2_slot11;
                    tangon = zuuluu.current;
                    michal = 1;
                    michal = tangon + michal;
                    zuuluu['current'] = michal;
                    michal = _closure2_slot4;
                    zuuluu = null;
                    michal = zuuluu != michal;
                    if(!michal) { _fun00016_ip = 376; continue _fun00015 }
 359:
                    tangon = _closure2_slot11;
                    report = tangon.current;
                    tangon = _closure2_slot4;
                    michal = report >= tangon;
 376:
                    if(!michal) { _fun00016_ip = 407; continue _fun00015 }
 379:
                    michal = _closure2_slot5;
                    if(!(zuuluu != michal)) { _fun00016_ip = 397; continue _fun00015 }
 387:
                    zuuluu = _closure2_slot5;
                    michal = undefined;
                    michal = zuuluu.bind(michal)();
 397:
                    michal = _closure2_slot15;
                    entity = undefined;
                    entity = michal.bind(entity)();
 407:
                    entity = undefined;
                    return entity;
                }
            };
            entity = tangon.bind(report)(oscard, entity);
            entity = new Array(2);
            zuuluu = function() {
                zuuluu = _closure2_slot12;
                michal = true;
                zuuluu['current'] = michal;
                zuuluu = _closure2_slot10;
                michal = false;
                zuuluu['current'] = michal;
                zuuluu = _closure2_slot8;
                michal = -1;
                zuuluu['current'] = michal;
                zuuluu = _closure2_slot9;
                report = _closure2_slot0;
                tangon = report.map;
                michal = function(argFoo) {
                    zuuluu = _closure1_slot4;
                    michal = undefined;
                    entity = argFoo;
                    entity = zuuluu.bind(michal)(entity);
                    return entity;
                };
                michal = tangon.bind(report)(michal);
                zuuluu['current'] = michal;
                zuuluu = _closure2_slot13;
                michal = _closure2_slot1;
                zuuluu['current'] = michal;
                michal = _closure2_slot7;
                entity = michal.start;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            entity[0] = zuuluu;
            entity[1] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();