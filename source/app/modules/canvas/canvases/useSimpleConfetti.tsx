// app/modules/canvas/canvases/useSimpleConfetti.tsx
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
    verify = 0;
    tangon = oscard[verify];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    option = 1;
    golfie = oscard[option];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = {};
    tangon['FREE'] = verify;
    golfie = 'FREE';
    tangon[verify] = golfie;
    tangon['ACTIVE'] = option;
    golfie = 'ACTIVE';
    tangon[option] = golfie;
    var _closure1_slot5 = tangon;
    tangon = function() { // Original name: _getWeightedScale
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = global;
            michal = entity.Math;
            entity = michal.random;
            michal = entity.bind(michal)();
            entity = 0.15;
            if(!(!(michal < entity))) { _fun00002_ip = 160; continue _fun00001 }
 35:
            entity = 0.8;
            if(!(!(michal < entity))) { _fun00002_ip = 108; continue _fun00001 }
 49:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.random;
            michal = 1.3;
            entity = 1.75;
            entity = zuuluu.bind(tangon)(michal, entity);
            _fun00002_ip = 158; continue _fun00001;
 108:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 6;
            zuuluu = zuuluu[michal];
            michal = undefined;
            report = tangon.bind(michal)(zuuluu);
            tangon = report.random;
            zuuluu = 1;
            michal = 1.3;
            entity = tangon.bind(report)(zuuluu, michal);
 158:
            _fun00002_ip = 210; continue _fun00001;
 160:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 6;
            zuuluu = zuuluu[michal];
            michal = undefined;
            report = tangon.bind(michal)(zuuluu);
            tangon = report.random;
            zuuluu = 0.8;
            michal = 1;
            entity = tangon.bind(report)(zuuluu, michal);
 210:
            return entity;
        }
    };
    var _closure1_slot6 = tangon;
    tangon = function(argFoo, argBar) { // Original name: isParticleOffscreen
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            michal = argBar;
            entity = zuuluu.position;
            tangon = entity.y;
            entity = michal.h;
            entity = tangon > entity;
            if(entity) { _fun00004_ip = 48; continue _fun00003 }
 28:
            tangon = zuuluu.position;
            report = tangon.x;
            tangon = -128;
            entity = report < tangon;
 48:
            if(entity) { _fun00004_ip = 70; continue _fun00003 }
 51:
            zuuluu = zuuluu.position;
            zuuluu = zuuluu.x;
            michal = michal.w;
            entity = zuuluu > michal;
 70:
            return entity;
        }
    };
    var _closure1_slot7 = tangon;
    tangon = function(argFoo) { // Original name: sortParticles
        michal = argFoo;
        zuuluu = michal.particles;
        zuuluu = zuuluu.current;
        var _closure2_slot0 = zuuluu;
        zuuluu = michal.particleStates;
        zuuluu = zuuluu.current;
        var _closure2_slot1 = zuuluu;
        michal = michal.sortedParticles;
        zuuluu = michal.current;
        michal = zuuluu.sort;
        entity = function(argFoo, argBar) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                report = argFoo;
                oscard = argBar;
                entity = _closure2_slot1;
                zuuluu = entity[report];
                michal = entity[oscard];
                if(!(zuuluu === michal)) { _fun00006_ip = 74; continue _fun00005 }
 25:
                entity = _closure1_slot5;
                golfie = entity.ACTIVE;
                entity = 0;
                if(!(zuuluu === golfie)) { _fun00006_ip = 72; continue _fun00005 }
 44:
                tangon = _closure2_slot0;
                report = tangon[report];
                report = report.scale;
                tangon = tangon[oscard];
                tangon = tangon.scale;
                entity = report - tangon;
 72:
                _fun00006_ip = 78; continue _fun00005;
 74:
                entity = zuuluu - michal;
 78:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot8 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/canvas/canvases/useSimpleConfetti.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: _default
        zuuluu = argFoo;
        var _closure2_slot0 = zuuluu;
        michal = function(argFoo) {
            michal = argFoo;
            var _closure3_slot0 = michal;
            yankee = _closure1_slot4;
            report = yankee.useState;
            zuuluu = {};
            golfie = michal.h;
            oscard = 0.9;
            oscard = oscard * golfie;
            zuuluu['y'] = oscard;
            golfie = michal.w;
            oscard = 0.6;
            oscard = oscard * golfie;
            zuuluu['x'] = oscard;
            zuuluu = report.bind(yankee)(zuuluu);
            sizing = _closure1_slot3;
            kiloes = undefined;
            backup = 2;
            zuuluu = sizing.bind(kiloes)(zuuluu, backup);
            tangon = 0;
            verify = zuuluu[tangon];
            foxtra = 1;
            zuuluu = zuuluu[foxtra];
            var _closure3_slot1 = zuuluu;
            report = yankee.useState;
            zuuluu = 1200;
            zuuluu = report.bind(yankee)(zuuluu);
            zuuluu = sizing.bind(kiloes)(zuuluu, backup);
            option = zuuluu[tangon];
            zuuluu = zuuluu[foxtra];
            report = yankee.useState;
            zuuluu = 0.94;
            zuuluu = report.bind(yankee)(zuuluu);
            zuuluu = sizing.bind(kiloes)(zuuluu, backup);
            golfie = zuuluu[tangon];
            zuuluu = zuuluu[foxtra];
            zuuluu = yankee.useState;
            zuuluu = zuuluu.bind(yankee)(tangon);
            zuuluu = sizing.bind(kiloes)(zuuluu, backup);
            oscard = zuuluu[tangon];
            zuuluu = zuuluu[foxtra];
            zuuluu = yankee.useState;
            romeon = 15;
            zuuluu = zuuluu.bind(yankee)(romeon);
            zuuluu = sizing.bind(kiloes)(zuuluu, backup);
            report = zuuluu[tangon];
            zuuluu = zuuluu[foxtra];
            var _closure3_slot2 = zuuluu;
            offset = yankee.useState;
            zuuluu = 180;
            zuuluu = offset.bind(yankee)(zuuluu);
            offset = sizing.bind(kiloes)(zuuluu, backup);
            zuuluu = offset[tangon];
            offset = offset[foxtra];
            var _closure3_slot3 = offset;
            output = yankee.useState;
            offset = 60;
            offset = output.bind(yankee)(offset);
            offset = sizing.bind(kiloes)(offset, backup);
            tangon = offset[tangon];
            var _closure3_slot4 = tangon;
            offset = offset[foxtra];
            var _closure3_slot5 = offset;
            foxtra = yankee.useEffect;
            backup = michal.h;
            offset = new Array(2);
            offset[0] = backup;
            michal = michal.w;
            offset[1] = michal;
            michal = function() {
                zuuluu = _closure3_slot1;
                michal = {};
                entity = _closure3_slot0;
                report = entity.h;
                tangon = 1.2;
                tangon = tangon * report;
                michal['y'] = tangon;
                tangon = entity.w;
                entity = 0.8;
                entity = entity * tangon;
                michal['x'] = entity;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal = foxtra.bind(yankee)(michal, offset);
            offset = yankee.useCallback;
            michal = new Array(2);
            michal[0] = tangon;
            michal[1] = romeon;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = _closure3_slot4;
                    zuuluu = 60;
                    if(!(zuuluu !== tangon)) { _fun00008_ip = 102; continue _fun00007 }
 16:
                    tangon = _closure3_slot2;
                    report = undefined;
                    zuuluu = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            entity = argFoo;
                            michal = global;
                            report = michal.Math;
                            tangon = report.max;
                            oscard = michal.Math;
                            zuuluu = oscard.floor;
                            michal = 0.75;
                            michal = michal * entity;
                            zuuluu = zuuluu.bind(oscard)(michal);
                            michal = 3;
                            tangon = tangon.bind(report)(michal, zuuluu);
                            var _closure4_slot0 = tangon;
                            zuuluu = null;
                            if(!(zuuluu != tangon)) { _fun00010_ip = 73; continue _fun00009 }
 69:
                            entity = _closure4_slot0;
 73:
                            return entity;
                        }
                    };
                    zuuluu = tangon.bind(report)(zuuluu);
                    tangon = _closure3_slot3;
                    zuuluu = function(argFoo) {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            entity = argFoo;
                            michal = global;
                            report = michal.Math;
                            tangon = report.max;
                            oscard = michal.Math;
                            zuuluu = oscard.floor;
                            michal = 0.8;
                            michal = michal * entity;
                            zuuluu = zuuluu.bind(oscard)(michal);
                            michal = 6;
                            tangon = tangon.bind(report)(michal, zuuluu);
                            var _closure4_slot1 = tangon;
                            zuuluu = null;
                            if(!(zuuluu != tangon)) { _fun00012_ip = 73; continue _fun00011 }
 69:
                            entity = _closure4_slot1;
 73:
                            return entity;
                        }
                    };
                    zuuluu = tangon.bind(report)(zuuluu);
                    tangon = _closure4_slot0;
                    zuuluu = null;
                    zuuluu = zuuluu != tangon;
                    if(!zuuluu) { _fun00008_ip = 81; continue _fun00007 }
 63:
                    oscard = _closure4_slot0;
                    tangon = 8.4375;
                    zuuluu = oscard < tangon;
 81:
                    if(!zuuluu) { _fun00008_ip = 120; continue _fun00007 }
 84:
                    tangon = _closure3_slot5;
                    zuuluu = function() {
                        entity = 28;
                        return entity;
                    };
                    zuuluu = tangon.bind(report)(zuuluu);
                    _fun00008_ip = 120; continue _fun00007;
 102:
                    zuuluu = _closure3_slot5;
                    michal = undefined;
                    entity = function() {
                        entity = 45;
                        return entity;
                    };
                    entity = zuuluu.bind(michal)(entity);
 120:
                    entity = true;
                    return entity;
                }
            };
            michal = offset.bind(yankee)(entity, michal);
            entity = {};
            entity['SPEED'] = verify;
            entity['GRAVITY'] = option;
            entity['DRAG'] = golfie;
            entity['Y_POS'] = oscard;
            entity['PARTICLES_PER_EMISSION'] = report;
            entity['MAX_PARTICLES'] = zuuluu;
            zuuluu = 1000;
            zuuluu = zuuluu / tangon;
            entity['tickRate'] = zuuluu;
            entity['improvePerformance'] = michal;
            return entity;
        };
        entity = undefined;
        entity = michal.bind(entity)(zuuluu);
        michal = entity.SPEED;
        var _closure2_slot1 = michal;
        michal = entity.GRAVITY;
        var _closure2_slot2 = michal;
        michal = entity.DRAG;
        var _closure2_slot3 = michal;
        michal = entity.Y_POS;
        var _closure2_slot4 = michal;
        michal = entity.PARTICLES_PER_EMISSION;
        var _closure2_slot5 = michal;
        golfie = entity.MAX_PARTICLES;
        var _closure2_slot6 = golfie;
        tangon = entity.tickRate;
        zuuluu = entity.improvePerformance;
        entity = {};
        oscard = _closure1_slot4;
        verify = oscard.useRef;
        michal = global;
        option = michal.Array;
        offset = option.prototype;
        offset = Object.create(offset, {constructor: {value: option}});
        kiloes = offset;
        backup = golfie;
        option = new kiloes[option](backup, foxtra);
        option = option instanceof Object ? option : offset;
        option = verify.bind(oscard)(option);
        entity['particles'] = option;
        verify = oscard.useRef;
        option = michal.Uint8Array;
        offset = option.prototype;
        offset = Object.create(offset, {constructor: {value: option}});
        kiloes = offset;
        backup = golfie;
        option = new kiloes[option](backup, foxtra);
        option = option instanceof Object ? option : offset;
        option = verify.bind(oscard)(option);
        entity['particleStates'] = option;
        option = oscard.useRef;
        offset = michal.Uint16Array;
        romeon = michal.Array;
        yankee = romeon.from;
        verify = {};
        verify['length'] = golfie;
        michal = function(argFoo, argBar) {
            entity = argBar;
            return entity;
        };
        backup = yankee.bind(romeon)(verify, michal);
        verify = offset.prototype;
        verify = Object.create(verify, {constructor: {value: offset}});
        kiloes = verify;
        michal = new kiloes[offset](backup, foxtra);
        michal = michal instanceof Object ? michal : verify;
        michal = option.bind(oscard)(michal);
        entity['sortedParticles'] = michal;
        michal = oscard.useRef;
        michal = michal.bind(oscard)(golfie);
        entity['freeParticles'] = michal;
        golfie = oscard.useRef;
        michal = 0;
        michal = golfie.bind(oscard)(michal);
        entity['activeParticles'] = michal;
        var _closure2_slot7 = entity;
        michal = oscard.useRef;
        entity = false;
        michal = michal.bind(oscard)(entity);
        var _closure2_slot8 = michal;
        entity = {};
        oscard = function(argFoo) { // Original name: update
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                offset = argFoo;
                michal = _closure2_slot7;
                michal = michal.activeParticles;
                michal = michal.current;
                zuuluu = 0;
                if(!(zuuluu !== michal)) { _fun00014_ip = 429; continue _fun00013 }
 30:
                michal = _closure2_slot7;
                tangon = michal.particleStates;
                verify = tangon.current;
                michal = michal.particles;
                option = michal.current;
                michal = _closure2_slot6;
                michal = zuuluu < michal;
                oscard = 1;
                report = undefined;
                tangon = 0;
                if(!michal) { _fun00014_ip = 398; continue _fun00013 }
 80:
                yankee = verify[tangon];
                michal = _closure1_slot5;
                michal = michal.FREE;
                if(!(yankee !== michal)) { _fun00014_ip = 384; continue _fun00013 }
 101:
                romeon = option[tangon];
                yankee = romeon.position;
                foxtra = yankee.x;
                michal = romeon.velocity;
                michal = michal.x;
                michal = michal * offset;
                michal = foxtra - michal;
                yankee['x'] = michal;
                yankee = romeon.position;
                foxtra = yankee.y;
                michal = romeon.velocity;
                michal = michal.y;
                michal = michal * offset;
                michal = foxtra - michal;
                yankee['y'] = michal;
                foxtra = romeon.velocity;
                backup = foxtra.x;
                michal = _closure2_slot3;
                sizing = michal;
                kiloes = offset;
                yankee = exponentiationOperator(sizing, kiloes);
                yankee = backup * yankee;
                foxtra['x'] = yankee;
                yankee = romeon.velocity;
                foxtra = yankee.y;
                sizing = michal;
                kiloes = offset;
                michal = exponentiationOperator(sizing, kiloes);
                michal = foxtra * michal;
                yankee['y'] = michal;
                yankee = romeon.rotation;
                michal = romeon.angularVelocity;
                michal = michal * offset;
                michal = yankee + michal;
                romeon['rotation'] = michal;
                yankee = romeon.velocity;
                foxtra = yankee.y;
                michal = _closure2_slot2;
                michal = michal * offset;
                michal = foxtra - michal;
                yankee['y'] = michal;
                yankee = _closure1_slot7;
                michal = _closure2_slot0;
                michal = yankee.bind(report)(romeon, michal);
                if(!michal) { _fun00014_ip = 384; continue _fun00013 }
 313:
                michal = _closure2_slot7;
                yankee = michal.particleStates;
                romeon = yankee.current;
                yankee = _closure1_slot5;
                yankee = yankee.FREE;
                romeon[tangon] = yankee;
                romeon = michal.activeParticles;
                yankee = romeon.current;
                yankee = yankee - oscard;
                romeon['current'] = yankee;
                yankee = michal.freeParticles;
                michal = yankee.current;
                michal = michal + oscard;
                yankee['current'] = michal;
 384:
                tangon = tangon + 1;
                michal = _closure2_slot6;
                if(tangon < michal) { _fun00014_ip = 80; continue _fun00013 }
 398:
                michal = _closure2_slot7;
                michal = michal.activeParticles;
                michal = michal.current;
                if(!(zuuluu === michal)) { _fun00014_ip = 429; continue _fun00013 }
 417:
                michal = _closure2_slot8;
                entity = false;
                michal['current'] = entity;
 429:
                entity = undefined;
                return entity;
            }
        };
        entity['update'] = oscard;
        oscard = function(argFoo) { // Original name: draw
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                zuuluu = argFoo;
                var _closure3_slot0 = zuuluu;
                michal = zuuluu.clearRect;
                entity = {'x': 0, 'y': 0};
                report = 0;
                golfie = _closure2_slot0;
                option = golfie.w;
                entity['w'] = option;
                golfie = golfie.h;
                entity['h'] = golfie;
                entity = michal.bind(zuuluu)(entity);
                entity = _closure2_slot7;
                entity = entity.activeParticles;
                entity = entity.current;
                if(!(report !== entity)) { _fun00016_ip = 170; continue _fun00015 }
 76:
                entity = _closure2_slot7;
                michal = entity.particleStates;
                michal = michal.current;
                var _closure3_slot1 = michal;
                michal = entity.particles;
                michal = michal.current;
                var _closure3_slot2 = michal;
                entity = entity.sortedParticles;
                entity = entity.current;
                var _closure3_slot3 = entity;
                zuuluu = function() { // Original name: _loop
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        tangon = _closure3_slot3;
                        zuuluu = _closure3_slot4;
                        report = tangon[zuuluu];
                        zuuluu = _closure3_slot1;
                        oscard = zuuluu[report];
                        zuuluu = _closure1_slot5;
                        zuuluu = zuuluu.FREE;
                        if(!(oscard !== zuuluu)) { _fun00018_ip = 598; continue _fun00017 }
 45:
                        zuuluu = _closure3_slot2;
                        zuuluu = zuuluu[report];
                        var _closure4_slot0 = zuuluu;
                        romeon = null;
                        if(!(romeon != zuuluu)) { _fun00018_ip = 594; continue _fun00017 }
 66:
                        report = zuuluu.position;
                        verify = report.x;
                        report = report.y;
                        option = zuuluu.scale;
                        oscard = 1.3;
                        if(!(option >= oscard)) { _fun00018_ip = 172; continue _fun00017 }
 101:
                        yankee = _closure3_slot0;
                        offset = yankee.setFilter;
                        golfie = {};
                        backup = zuuluu.scale;
                        foxtra = 1;
                        output = backup - foxtra;
                        foxtra = global;
                        sizing = foxtra.Math;
                        kiloes = sizing.round;
                        backup = 4;
                        foxtra = 3;
                        foxtra = foxtra * output;
                        foxtra = backup * foxtra;
                        foxtra = kiloes.bind(sizing)(foxtra);
                        foxtra = foxtra / backup;
                        golfie['blur'] = foxtra;
                        golfie = offset.bind(yankee)(golfie);
 172:
                        golfie = option;
                        if(!(golfie >= oscard)) { _fun00018_ip = 189; continue _fun00017 }
 179:
                        echoed = 2;
                        update = option;
                        golfie = exponentiationOperator(update, echoed);
 189:
                        oscard = _closure3_slot0;
                        offset = oscard.assetMap;
                        if(!(romeon != offset)) { _fun00018_ip = 224; continue _fun00017 }
 203:
                        option = offset.has;
                        oscard = zuuluu.key;
                        oscard = option.bind(offset)(oscard);
                        if(oscard) { _fun00018_ip = 472; continue _fun00017 }
 224:
                        option = _closure1_slot1;
                        offset = _closure1_slot2;
                        oscard = 3;
                        oscard = offset[oscard];
                        offset = undefined;
                        yankee = option.bind(offset)(oscard);
                        option = yankee.contentHasUnicodeOrEmoji;
                        oscard = zuuluu.key;
                        oscard = option.bind(yankee)(oscard);
                        yankee = zuuluu.scale;
                        option = 24;
                        option = option * yankee;
                        yankee = {};
                        foxtra = 2;
                        foxtra = option / foxtra;
                        backup = verify + foxtra;
                        yankee['x'] = backup;
                        foxtra = report + foxtra;
                        yankee['y'] = foxtra;
                        if(!(romeon == oscard)) { _fun00018_ip = 423; continue _fun00017 }
 304:
                        backup = _closure3_slot0;
                        romeon = backup.setFont;
                        oscard = {};
                        oscard['size'] = option;
                        oscard = romeon.bind(backup)(oscard);
                        foxtra = backup.rotateAroundOriginAndDraw;
                        romeon = zuuluu.rotation;
                        oscard = function() {
                            tangon = _closure3_slot0;
                            zuuluu = tangon.drawText;
                            michal = '🎉';
                            entity = {'x': 0, 'y': 0};
                            entity = zuuluu.bind(tangon)(michal, entity);
                            return entity;
                        };
                        oscard = foxtra.bind(backup)(yankee, romeon, oscard);
                        oscard = _closure1_slot1;
                        romeon = _closure1_slot2;
                        tangon = 4;
                        tangon = romeon[tangon];
                        offset = oscard.bind(offset)(tangon);
                        oscard = offset.captureMessage;
                        backup = zuuluu.key;
                        tangon = global;
                        tangon = tangon.HermesInternal;
                        foxtra = tangon.concat;
                        romeon = "Simple Confetti couldn't trigger explosion for ";
                        tangon = ".  It doesn't have an image and seemingly isn't a valid unicode emoji.";
                        tangon = foxtra.bind(romeon)(backup, tangon);
                        tangon = oscard.bind(offset)(tangon);
                        _fun00018_ip = 566; continue _fun00017;
 423:
                        offset = _closure3_slot0;
                        oscard = offset.setFont;
                        tangon = {};
                        tangon['size'] = option;
                        tangon = oscard.bind(offset)(tangon);
                        option = offset.rotateAroundOriginAndDraw;
                        oscard = zuuluu.rotation;
                        tangon = function() {
                            tangon = _closure3_slot0;
                            zuuluu = tangon.drawText;
                            entity = _closure4_slot0;
                            michal = entity.key;
                            entity = {'x': 0, 'y': 0};
                            entity = zuuluu.bind(tangon)(michal, entity);
                            return entity;
                        };
                        tangon = option.bind(offset)(yankee, oscard, tangon);
                        _fun00018_ip = 566; continue _fun00017;
 472:
                        tangon = {};
                        oscard = 32;
                        option = oscard * golfie;
                        tangon['w'] = option;
                        oscard = oscard * golfie;
                        tangon['h'] = oscard;
                        var _closure4_slot1 = tangon;
                        oscard = {};
                        option = tangon.w;
                        golfie = 2;
                        option = option / golfie;
                        option = verify + option;
                        oscard['x'] = option;
                        tangon = tangon.h;
                        tangon = tangon / golfie;
                        tangon = report + tangon;
                        oscard['y'] = tangon;
                        report = _closure3_slot0;
                        tangon = report.rotateAroundOriginAndDraw;
                        zuuluu = zuuluu.rotation;
                        michal = function() {
                            oscard = _closure3_slot0;
                            report = oscard.drawImage;
                            michal = _closure4_slot0;
                            tangon = michal.key;
                            offset = _closure4_slot1;
                            michal = {};
                            option = _closure1_slot0;
                            golfie = _closure1_slot2;
                            entity = 2;
                            golfie = golfie[entity];
                            entity = undefined;
                            entity = option.bind(entity)(golfie);
                            entity = entity.FillMode;
                            entity = entity.Contain;
                            michal['fillMode'] = entity;
                            yankee = {'x': 0, 'y': 0};
                            foxtra = oscard;
                            romeon = tangon;
                            verify = michal;
                            entity = foxtra[report](romeon, yankee, offset, verify, option);
                            return entity;
                        };
                        michal = tangon.bind(report)(oscard, zuuluu, michal);
 566:
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.setFilter;
                        entity = {};
                        tangon = 0;
                        entity['blur'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
 594:
                        entity = 0;
                        return entity;
 598:
                        entity = 0;
                        return entity;
                    }
                };
                var _closure3_slot4 = report;
                entity = _closure2_slot6;
                entity = report < entity;
                michal = undefined;
                report = 0;
                if(!entity) { _fun00016_ip = 170; continue _fun00015 }
 151:
                entity = zuuluu.bind(michal)();
                report = report + 1;
                _closure3_slot4 = report;
                entity = _closure2_slot6;
                if(report < entity) { _fun00016_ip = 151; continue _fun00015 }
 170:
                entity = undefined;
                return entity;
            }
        };
        entity['draw'] = oscard;
        report = function(argFoo, argBar) { // Original name: emit
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                sizing = argFoo;
                zuuluu = argBar;
                tangon = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 5;
                michal = michal[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(michal);
                michal = tangon.isProbablyAValidSnowflake;
                oscard = michal.bind(tangon)(sizing);
                tangon = _closure2_slot5;
                report = false;
                backup = tangon;
                if(!(report === oscard)) { _fun00020_ip = 104; continue _fun00019 }
 58:
                report = global;
                golfie = report.Math;
                oscard = golfie.max;
                offset = report.Math;
                verify = offset.min;
                report = 3;
                option = tangon / report;
                tangon = 10;
                tangon = verify.bind(offset)(option, tangon);
                backup = oscard.bind(golfie)(tangon, report);
 104:
                tangon = _closure2_slot7;
                tangon = tangon.freeParticles;
                report = tangon.current;
                foxtra = 2;
                tangon = backup / foxtra;
                if(!(!(report < tangon))) { _fun00020_ip = 886; continue _fun00019 }
 133:
                tangon = zuuluu.x;
                romeon = 0;
                tangon = romeon === tangon;
                if(!tangon) { _fun00020_ip = 156; continue _fun00019 }
 147:
                report = zuuluu.y;
                tangon = romeon === report;
 156:
                if(!tangon) { _fun00020_ip = 168; continue _fun00019 }
 159:
                report = zuuluu.w;
                tangon = romeon === report;
 168:
                if(!tangon) { _fun00020_ip = 176; continue _fun00019 }
 171:
                tangon = zuuluu.h;
 176:
                yankee = {};
                tangon = _closure2_slot0;
                oscard = tangon.h;
                report = 8;
                report = oscard / report;
                yankee['min'] = report;
                oscard = tangon.h;
                report = 3;
                report = oscard / report;
                yankee['max'] = report;
                report = zuuluu.y;
                tangon = tangon.h;
                golfie = 0.66;
                tangon = golfie * tangon;
                if(!(report < tangon)) { _fun00020_ip = 293; continue _fun00019 }
 242:
                tangon = global;
                oscard = tangon.Math;
                report = oscard.max;
                tangon = zuuluu.y;
                zuuluu = _closure2_slot0;
                zuuluu = zuuluu.h;
                zuuluu = golfie * zuuluu;
                tangon = tangon / zuuluu;
                zuuluu = 0.2;
                zuuluu = report.bind(oscard)(zuuluu, tangon);
 293:
                output = romeon < backup;
                offset = 1;
                verify = 6;
                zuuluu = true;
                option = 30;
                golfie = global;
                oscard = -50;
                report = 50;
                tangon = 0;
                if(!output) { _fun00020_ip = 876; continue _fun00019 }
 327:
                vacuum = {};
                echoed = _closure1_slot0;
                output = _closure1_slot2;
                result = output[verify];
                sequen = echoed.bind(entity)(result);
                ctrled = sequen.random;
                result = _closure2_slot1;
                update = result.x;
                source = -update;
                update = result.x;
                update = ctrled.bind(sequen)(source, update, zuuluu);
                vacuum['x'] = update;
                source = result.y;
                update = output[verify];
                config = echoed.bind(entity)(update);
                sequen = config.random;
                update = yankee.min;
                ctrled = -update;
                update = yankee.max;
                update = sequen.bind(config)(ctrled, update, zuuluu);
                update = source + update;
                vacuum['y'] = update;
                update = output[verify];
                source = echoed.bind(entity)(update);
                update = source.random;
                ctrled = update.bind(source)(romeon, option);
                sequen = golfie.Math;
                source = sequen.atan2;
                update = result.y;
                config = -update;
                update = output[verify];
                papara = echoed.bind(entity)(update);
                cntext = papara.random;
                update = yankee.min;
                record = -update;
                update = yankee.max;
                update = cntext.bind(papara)(record, update, zuuluu);
                update = config - update;
                config = output[verify];
                cntext = echoed.bind(entity)(config);
                record = cntext.random;
                config = result.x;
                config = -config;
                result = result.x;
                result = record.bind(cntext)(config, result, zuuluu);
                update = source.bind(sequen)(update, result);
                result = output[verify];
                source = echoed.bind(entity)(result);
                result = source.random;
                result = result.bind(source)(oscard, report);
                source = update * result;
                sequen = {};
                result = _closure2_slot0;
                update = result.w;
                config = update / foxtra;
                update = output[verify];
                record = echoed.bind(entity)(update);
                update = record.random;
                update = update.bind(record)(oscard, report);
                update = config + update;
                sequen['x'] = update;
                update = result.h;
                result = _closure2_slot4;
                result = update - result;
                output = output[verify];
                echoed = echoed.bind(entity)(output);
                output = echoed.random;
                output = output.bind(echoed)(oscard, report);
                output = result + output;
                sequen['y'] = output;
                output = _closure2_slot6;
                output = romeon < output;
                result = 0;
                if(!output) { _fun00020_ip = 853; continue _fun00019 }
 676:
                output = _closure2_slot7;
                output = output.particleStates;
                output = output.current;
                echoed = output[result];
                output = _closure1_slot5;
                output = output.FREE;
                update = result;
                if(!(echoed !== output)) { _fun00020_ip = 729; continue _fun00019 }
 712:
                result = update + offset;
                output = _closure2_slot6;
                if(result < output) { _fun00020_ip = 676; continue _fun00019 }
 724:
                _fun00020_ip = 853; continue _fun00019;
 729:
                output = _closure2_slot7;
                result = output.particles;
                echoed = result.current;
                result = {};
                result['key'] = sizing;
                result['position'] = sequen;
                result['velocity'] = vacuum;
                vacuum = _closure1_slot6;
                vacuum = vacuum.bind(entity)();
                result['scale'] = vacuum;
                result['rotation'] = ctrled;
                result['angularVelocity'] = source;
                echoed[update] = result;
                result = output.particleStates;
                echoed = result.current;
                result = _closure1_slot5;
                result = result.ACTIVE;
                echoed[update] = result;
                echoed = output.freeParticles;
                result = echoed.current;
                result = result - offset;
                echoed['current'] = result;
                result = output.activeParticles;
                output = result.current;
                output = output + offset;
                result['current'] = output;
 853:
                result = _closure1_slot8;
                output = _closure2_slot7;
                output = result.bind(entity)(output);
                tangon = tangon + 1;
                if(tangon < backup) { _fun00020_ip = 327; continue _fun00019 }
 876:
                michal = _closure2_slot8;
                michal['current'] = zuuluu;
 886:
                return entity;
            }
        };
        entity['emit'] = report;
        entity['tickRate'] = tangon;
        entity['improvePerformance'] = zuuluu;
        entity['shouldTick'] = michal;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();