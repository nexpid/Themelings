// app/modules/canvas/canvases/useSimpleConfetti.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    verify = 0;
    tango = oscar[verify];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    options = 1;
    golf = oscar[options];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = {};
    tango['FREE'] = verify;
    golf = 'FREE';
    tango[verify] = golf;
    tango['ACTIVE'] = options;
    golf = 'ACTIVE';
    tango[options] = golf;
    var _closure1_slot5 = tango;
    tango = function() { // Original name: _getWeightedScale
        _fun121173: for(var _fun121173_ip = 0; ; ) switch(_fun121173_ip) {
 0:
            entity = global;
            mike = entity.Math;
            entity = mike.random;
            mike = entity.bind(mike)();
            entity = 0.15;
            if(!(!(mike < entity))) { _fun121173_ip = 160; continue _fun121173 }
 35:
            entity = 0.8;
            if(!(!(mike < entity))) { _fun121173_ip = 108; continue _fun121173 }
 49:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.random;
            mike = 1.3;
            entity = 1.75;
            entity = zulu.bind(tango)(mike, entity);
            _fun121173_ip = 158; continue _fun121173;
 108:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 6;
            zulu = zulu[mike];
            mike = undefined;
            report = tango.bind(mike)(zulu);
            tango = report.random;
            zulu = 1;
            mike = 1.3;
            entity = tango.bind(report)(zulu, mike);
 158:
            _fun121173_ip = 210; continue _fun121173;
 160:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 6;
            zulu = zulu[mike];
            mike = undefined;
            report = tango.bind(mike)(zulu);
            tango = report.random;
            zulu = 0.8;
            mike = 1;
            entity = tango.bind(report)(zulu, mike);
 210:
            return entity;
        }
    };
    var _closure1_slot6 = tango;
    tango = function(argFoo, argBar) { // Original name: isParticleOffscreen
        _fun121174: for(var _fun121174_ip = 0; ; ) switch(_fun121174_ip) {
 0:
            zulu = argFoo;
            mike = argBar;
            entity = zulu.position;
            tango = entity.y;
            entity = mike.h;
            entity = tango > entity;
            if(entity) { _fun121174_ip = 48; continue _fun121174 }
 28:
            tango = zulu.position;
            report = tango.x;
            tango = -128;
            entity = report < tango;
 48:
            if(entity) { _fun121174_ip = 70; continue _fun121174 }
 51:
            zulu = zulu.position;
            zulu = zulu.x;
            mike = mike.w;
            entity = zulu > mike;
 70:
            return entity;
        }
    };
    var _closure1_slot7 = tango;
    tango = function(argFoo) { // Original name: sortParticles
        mike = argFoo;
        zulu = mike.particles;
        zulu = zulu.current;
        var _closure2_slot0 = zulu;
        zulu = mike.particleStates;
        zulu = zulu.current;
        var _closure2_slot1 = zulu;
        mike = mike.sortedParticles;
        zulu = mike.current;
        mike = zulu.sort;
        entity = function(argFoo, argBar) {
            _fun121176: for(var _fun121176_ip = 0; ; ) switch(_fun121176_ip) {
 0:
                report = argFoo;
                oscar = argBar;
                entity = _closure2_slot1;
                zulu = entity[report];
                mike = entity[oscar];
                if(!(zulu === mike)) { _fun121176_ip = 74; continue _fun121176 }
 25:
                entity = _closure1_slot5;
                golf = entity.ACTIVE;
                entity = 0;
                if(!(zulu === golf)) { _fun121176_ip = 72; continue _fun121176 }
 44:
                tango = _closure2_slot0;
                report = tango[report];
                report = report.scale;
                tango = tango[oscar];
                tango = tango.scale;
                entity = report - tango;
 72:
                _fun121176_ip = 78; continue _fun121176;
 74:
                entity = zulu - mike;
 78:
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot8 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/canvas/canvases/useSimpleConfetti.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: _default
        zulu = argFoo;
        var _closure2_slot0 = zulu;
        mike = function(argFoo) {
            mike = argFoo;
            var _closure3_slot0 = mike;
            yankee = _closure1_slot4;
            report = yankee.useState;
            zulu = {};
            golf = mike.h;
            oscar = 0.9;
            oscar = oscar * golf;
            zulu['y'] = oscar;
            golf = mike.w;
            oscar = 0.6;
            oscar = oscar * golf;
            zulu['x'] = oscar;
            zulu = report.bind(yankee)(zulu);
            sizing = _closure1_slot3;
            kilo = undefined;
            backup = 2;
            zulu = sizing.bind(kilo)(zulu, backup);
            tango = 0;
            verify = zulu[tango];
            foxtrot = 1;
            zulu = zulu[foxtrot];
            var _closure3_slot1 = zulu;
            report = yankee.useState;
            zulu = 1200;
            zulu = report.bind(yankee)(zulu);
            zulu = sizing.bind(kilo)(zulu, backup);
            options = zulu[tango];
            zulu = zulu[foxtrot];
            report = yankee.useState;
            zulu = 0.94;
            zulu = report.bind(yankee)(zulu);
            zulu = sizing.bind(kilo)(zulu, backup);
            golf = zulu[tango];
            zulu = zulu[foxtrot];
            zulu = yankee.useState;
            zulu = zulu.bind(yankee)(tango);
            zulu = sizing.bind(kilo)(zulu, backup);
            oscar = zulu[tango];
            zulu = zulu[foxtrot];
            zulu = yankee.useState;
            romeo = 15;
            zulu = zulu.bind(yankee)(romeo);
            zulu = sizing.bind(kilo)(zulu, backup);
            report = zulu[tango];
            zulu = zulu[foxtrot];
            var _closure3_slot2 = zulu;
            offset = yankee.useState;
            zulu = 180;
            zulu = offset.bind(yankee)(zulu);
            offset = sizing.bind(kilo)(zulu, backup);
            zulu = offset[tango];
            offset = offset[foxtrot];
            var _closure3_slot3 = offset;
            output = yankee.useState;
            offset = 60;
            offset = output.bind(yankee)(offset);
            offset = sizing.bind(kilo)(offset, backup);
            tango = offset[tango];
            var _closure3_slot4 = tango;
            offset = offset[foxtrot];
            var _closure3_slot5 = offset;
            foxtrot = yankee.useEffect;
            backup = mike.h;
            offset = new Array(2);
            offset[0] = backup;
            mike = mike.w;
            offset[1] = mike;
            mike = function() {
                zulu = _closure3_slot1;
                mike = {};
                entity = _closure3_slot0;
                report = entity.h;
                tango = 1.2;
                tango = tango * report;
                mike['y'] = tango;
                tango = entity.w;
                entity = 0.8;
                entity = entity * tango;
                mike['x'] = entity;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike = foxtrot.bind(yankee)(mike, offset);
            offset = yankee.useCallback;
            mike = new Array(2);
            mike[0] = tango;
            mike[1] = romeo;
            entity = function() {
                _fun121180: for(var _fun121180_ip = 0; ; ) switch(_fun121180_ip) {
 0:
                    tango = _closure3_slot4;
                    zulu = 60;
                    if(!(zulu !== tango)) { _fun121180_ip = 102; continue _fun121180 }
 16:
                    tango = _closure3_slot2;
                    report = undefined;
                    zulu = function(argFoo) {
                        _fun121182: for(var _fun121182_ip = 0; ; ) switch(_fun121182_ip) {
 0:
                            entity = argFoo;
                            mike = global;
                            report = mike.Math;
                            tango = report.max;
                            oscar = mike.Math;
                            zulu = oscar.floor;
                            mike = 0.75;
                            mike = mike * entity;
                            zulu = zulu.bind(oscar)(mike);
                            mike = 3;
                            mike = tango.bind(report)(mike, zulu);
                            var _closure4_slot0 = mike;
                            zulu = null;
                            if(!(zulu != mike)) { _fun121182_ip = 72; continue _fun121182 }
 69:
                            entity = mike;
 72:
                            return entity;
                        }
                    };
                    zulu = tango.bind(report)(zulu);
                    tango = _closure3_slot3;
                    zulu = function(argFoo) {
                        _fun121183: for(var _fun121183_ip = 0; ; ) switch(_fun121183_ip) {
 0:
                            entity = argFoo;
                            mike = global;
                            report = mike.Math;
                            tango = report.max;
                            oscar = mike.Math;
                            zulu = oscar.floor;
                            mike = 0.8;
                            mike = mike * entity;
                            zulu = zulu.bind(oscar)(mike);
                            mike = 6;
                            mike = tango.bind(report)(mike, zulu);
                            zulu = null;
                            if(!(zulu != mike)) { _fun121183_ip = 65; continue _fun121183 }
 62:
                            entity = mike;
 65:
                            return entity;
                        }
                    };
                    zulu = tango.bind(report)(zulu);
                    tango = _closure4_slot0;
                    zulu = null;
                    zulu = zulu != tango;
                    if(!zulu) { _fun121180_ip = 81; continue _fun121180 }
 63:
                    oscar = _closure4_slot0;
                    tango = 8.4375;
                    zulu = oscar < tango;
 81:
                    if(!zulu) { _fun121180_ip = 120; continue _fun121180 }
 84:
                    tango = _closure3_slot5;
                    zulu = function() {
                        entity = 28;
                        return entity;
                    };
                    zulu = tango.bind(report)(zulu);
                    _fun121180_ip = 120; continue _fun121180;
 102:
                    zulu = _closure3_slot5;
                    mike = undefined;
                    entity = function() {
                        entity = 45;
                        return entity;
                    };
                    entity = zulu.bind(mike)(entity);
 120:
                    entity = true;
                    return entity;
                }
            };
            mike = offset.bind(yankee)(entity, mike);
            entity = {};
            entity['SPEED'] = verify;
            entity['GRAVITY'] = options;
            entity['DRAG'] = golf;
            entity['Y_POS'] = oscar;
            entity['PARTICLES_PER_EMISSION'] = report;
            entity['MAX_PARTICLES'] = zulu;
            zulu = 1000;
            zulu = zulu / tango;
            entity['tickRate'] = zulu;
            entity['improvePerformance'] = mike;
            return entity;
        };
        entity = undefined;
        entity = mike.bind(entity)(zulu);
        mike = entity.SPEED;
        var _closure2_slot1 = mike;
        mike = entity.GRAVITY;
        var _closure2_slot2 = mike;
        mike = entity.DRAG;
        var _closure2_slot3 = mike;
        mike = entity.Y_POS;
        var _closure2_slot4 = mike;
        mike = entity.PARTICLES_PER_EMISSION;
        var _closure2_slot5 = mike;
        golf = entity.MAX_PARTICLES;
        var _closure2_slot6 = golf;
        tango = entity.tickRate;
        zulu = entity.improvePerformance;
        entity = {};
        oscar = _closure1_slot4;
        verify = oscar.useRef;
        mike = global;
        options = mike.Array;
        offset = options.prototype;
        offset = Object.create(offset, {constructor: {value: options}});
        kilo = offset;
        backup = golf;
        options = new kilo[options](backup, foxtrot);
        options = options instanceof Object ? options : offset;
        options = verify.bind(oscar)(options);
        entity['particles'] = options;
        verify = oscar.useRef;
        options = mike.Uint8Array;
        offset = options.prototype;
        offset = Object.create(offset, {constructor: {value: options}});
        kilo = offset;
        backup = golf;
        options = new kilo[options](backup, foxtrot);
        options = options instanceof Object ? options : offset;
        options = verify.bind(oscar)(options);
        entity['particleStates'] = options;
        options = oscar.useRef;
        offset = mike.Uint16Array;
        romeo = mike.Array;
        yankee = romeo.from;
        verify = {};
        verify['length'] = golf;
        mike = function(argFoo, argBar) {
            entity = argBar;
            return entity;
        };
        backup = yankee.bind(romeo)(verify, mike);
        verify = offset.prototype;
        verify = Object.create(verify, {constructor: {value: offset}});
        kilo = verify;
        mike = new kilo[offset](backup, foxtrot);
        mike = mike instanceof Object ? mike : verify;
        mike = options.bind(oscar)(mike);
        entity['sortedParticles'] = mike;
        mike = oscar.useRef;
        mike = mike.bind(oscar)(golf);
        entity['freeParticles'] = mike;
        golf = oscar.useRef;
        mike = 0;
        mike = golf.bind(oscar)(mike);
        entity['activeParticles'] = mike;
        var _closure2_slot7 = entity;
        mike = oscar.useRef;
        entity = false;
        mike = mike.bind(oscar)(entity);
        var _closure2_slot8 = mike;
        entity = {};
        oscar = function(argFoo) { // Original name: update
            _fun121186: for(var _fun121186_ip = 0; ; ) switch(_fun121186_ip) {
 0:
                offset = argFoo;
                mike = _closure2_slot7;
                mike = mike.activeParticles;
                mike = mike.current;
                zulu = 0;
                if(!(zulu !== mike)) { _fun121186_ip = 429; continue _fun121186 }
 30:
                mike = _closure2_slot7;
                tango = mike.particleStates;
                verify = tango.current;
                mike = mike.particles;
                options = mike.current;
                mike = _closure2_slot6;
                mike = zulu < mike;
                oscar = 1;
                report = undefined;
                tango = 0;
                if(!mike) { _fun121186_ip = 398; continue _fun121186 }
 80:
                yankee = verify[tango];
                mike = _closure1_slot5;
                mike = mike.FREE;
                if(!(yankee !== mike)) { _fun121186_ip = 384; continue _fun121186 }
 101:
                romeo = options[tango];
                yankee = romeo.position;
                foxtrot = yankee.x;
                mike = romeo.velocity;
                mike = mike.x;
                mike = mike * offset;
                mike = foxtrot - mike;
                yankee['x'] = mike;
                yankee = romeo.position;
                foxtrot = yankee.y;
                mike = romeo.velocity;
                mike = mike.y;
                mike = mike * offset;
                mike = foxtrot - mike;
                yankee['y'] = mike;
                foxtrot = romeo.velocity;
                backup = foxtrot.x;
                mike = _closure2_slot3;
                sizing = mike;
                kilo = offset;
                yankee = exponentiationOperator(sizing, kilo);
                yankee = backup * yankee;
                foxtrot['x'] = yankee;
                yankee = romeo.velocity;
                foxtrot = yankee.y;
                sizing = mike;
                kilo = offset;
                mike = exponentiationOperator(sizing, kilo);
                mike = foxtrot * mike;
                yankee['y'] = mike;
                yankee = romeo.rotation;
                mike = romeo.angularVelocity;
                mike = mike * offset;
                mike = yankee + mike;
                romeo['rotation'] = mike;
                yankee = romeo.velocity;
                foxtrot = yankee.y;
                mike = _closure2_slot2;
                mike = mike * offset;
                mike = foxtrot - mike;
                yankee['y'] = mike;
                yankee = _closure1_slot7;
                mike = _closure2_slot0;
                mike = yankee.bind(report)(romeo, mike);
                if(!mike) { _fun121186_ip = 384; continue _fun121186 }
 313:
                mike = _closure2_slot7;
                yankee = mike.particleStates;
                romeo = yankee.current;
                yankee = _closure1_slot5;
                yankee = yankee.FREE;
                romeo[tango] = yankee;
                romeo = mike.activeParticles;
                yankee = romeo.current;
                yankee = yankee - oscar;
                romeo['current'] = yankee;
                yankee = mike.freeParticles;
                mike = yankee.current;
                mike = mike + oscar;
                yankee['current'] = mike;
 384:
                tango = tango + 1;
                mike = _closure2_slot6;
                if(tango < mike) { _fun121186_ip = 80; continue _fun121186 }
 398:
                mike = _closure2_slot7;
                mike = mike.activeParticles;
                mike = mike.current;
                if(!(zulu === mike)) { _fun121186_ip = 429; continue _fun121186 }
 417:
                mike = _closure2_slot8;
                entity = false;
                mike['current'] = entity;
 429:
                entity = undefined;
                return entity;
            }
        };
        entity['update'] = oscar;
        oscar = function(argFoo) { // Original name: draw
            _fun121187: for(var _fun121187_ip = 0; ; ) switch(_fun121187_ip) {
 0:
                zulu = argFoo;
                var _closure3_slot0 = zulu;
                mike = zulu.clearRect;
                entity = {'x': 0, 'y': 0};
                report = 0;
                golf = _closure2_slot0;
                options = golf.w;
                entity['w'] = options;
                golf = golf.h;
                entity['h'] = golf;
                entity = mike.bind(zulu)(entity);
                entity = _closure2_slot7;
                entity = entity.activeParticles;
                entity = entity.current;
                if(!(report !== entity)) { _fun121187_ip = 170; continue _fun121187 }
 76:
                entity = _closure2_slot7;
                mike = entity.particleStates;
                mike = mike.current;
                var _closure3_slot1 = mike;
                mike = entity.particles;
                mike = mike.current;
                var _closure3_slot2 = mike;
                entity = entity.sortedParticles;
                entity = entity.current;
                var _closure3_slot3 = entity;
                zulu = function() { // Original name: _loop
                    _fun121188: for(var _fun121188_ip = 0; ; ) switch(_fun121188_ip) {
 0:
                        tango = _closure3_slot3;
                        zulu = _closure3_slot4;
                        report = tango[zulu];
                        zulu = _closure3_slot1;
                        oscar = zulu[report];
                        zulu = _closure1_slot5;
                        zulu = zulu.FREE;
                        if(!(oscar !== zulu)) { _fun121188_ip = 598; continue _fun121188 }
 45:
                        zulu = _closure3_slot2;
                        zulu = zulu[report];
                        var _closure4_slot0 = zulu;
                        romeo = null;
                        if(!(romeo != zulu)) { _fun121188_ip = 594; continue _fun121188 }
 66:
                        report = zulu.position;
                        verify = report.x;
                        report = report.y;
                        options = zulu.scale;
                        oscar = 1.3;
                        if(!(options >= oscar)) { _fun121188_ip = 172; continue _fun121188 }
 101:
                        yankee = _closure3_slot0;
                        offset = yankee.setFilter;
                        golf = {};
                        backup = zulu.scale;
                        foxtrot = 1;
                        output = backup - foxtrot;
                        foxtrot = global;
                        sizing = foxtrot.Math;
                        kilo = sizing.round;
                        backup = 4;
                        foxtrot = 3;
                        foxtrot = foxtrot * output;
                        foxtrot = backup * foxtrot;
                        foxtrot = kilo.bind(sizing)(foxtrot);
                        foxtrot = foxtrot / backup;
                        golf['blur'] = foxtrot;
                        golf = offset.bind(yankee)(golf);
 172:
                        golf = options;
                        if(!(golf >= oscar)) { _fun121188_ip = 189; continue _fun121188 }
 179:
                        echo = 2;
                        update = options;
                        golf = exponentiationOperator(update, echo);
 189:
                        oscar = _closure3_slot0;
                        offset = oscar.assetMap;
                        if(!(romeo != offset)) { _fun121188_ip = 224; continue _fun121188 }
 203:
                        options = offset.has;
                        oscar = zulu.key;
                        oscar = options.bind(offset)(oscar);
                        if(oscar) { _fun121188_ip = 472; continue _fun121188 }
 224:
                        options = _closure1_slot1;
                        offset = _closure1_slot2;
                        oscar = 3;
                        oscar = offset[oscar];
                        offset = undefined;
                        yankee = options.bind(offset)(oscar);
                        options = yankee.contentHasUnicodeOrEmoji;
                        oscar = zulu.key;
                        oscar = options.bind(yankee)(oscar);
                        yankee = zulu.scale;
                        options = 24;
                        options = options * yankee;
                        yankee = {};
                        foxtrot = 2;
                        foxtrot = options / foxtrot;
                        backup = verify + foxtrot;
                        yankee['x'] = backup;
                        foxtrot = report + foxtrot;
                        yankee['y'] = foxtrot;
                        if(!(romeo == oscar)) { _fun121188_ip = 423; continue _fun121188 }
 304:
                        backup = _closure3_slot0;
                        romeo = backup.setFont;
                        oscar = {};
                        oscar['size'] = options;
                        oscar = romeo.bind(backup)(oscar);
                        foxtrot = backup.rotateAroundOriginAndDraw;
                        romeo = zulu.rotation;
                        oscar = function() {
                            tango = _closure3_slot0;
                            zulu = tango.drawText;
                            mike = '🎉';
                            entity = {'x': 0, 'y': 0};
                            entity = zulu.bind(tango)(mike, entity);
                            return entity;
                        };
                        oscar = foxtrot.bind(backup)(yankee, romeo, oscar);
                        oscar = _closure1_slot1;
                        romeo = _closure1_slot2;
                        tango = 4;
                        tango = romeo[tango];
                        offset = oscar.bind(offset)(tango);
                        oscar = offset.captureMessage;
                        backup = zulu.key;
                        tango = global;
                        tango = tango.HermesInternal;
                        foxtrot = tango.concat;
                        romeo = "Simple Confetti couldn't trigger explosion for ";
                        tango = ".  It doesn't have an image and seemingly isn't a valid unicode emoji.";
                        tango = foxtrot.bind(romeo)(backup, tango);
                        tango = oscar.bind(offset)(tango);
                        _fun121188_ip = 566; continue _fun121188;
 423:
                        offset = _closure3_slot0;
                        oscar = offset.setFont;
                        tango = {};
                        tango['size'] = options;
                        tango = oscar.bind(offset)(tango);
                        options = offset.rotateAroundOriginAndDraw;
                        oscar = zulu.rotation;
                        tango = function() {
                            tango = _closure3_slot0;
                            zulu = tango.drawText;
                            entity = _closure4_slot0;
                            mike = entity.key;
                            entity = {'x': 0, 'y': 0};
                            entity = zulu.bind(tango)(mike, entity);
                            return entity;
                        };
                        tango = options.bind(offset)(yankee, oscar, tango);
                        _fun121188_ip = 566; continue _fun121188;
 472:
                        tango = {};
                        oscar = 32;
                        options = oscar * golf;
                        tango['w'] = options;
                        oscar = oscar * golf;
                        tango['h'] = oscar;
                        var _closure4_slot1 = tango;
                        oscar = {};
                        options = tango.w;
                        golf = 2;
                        options = options / golf;
                        options = verify + options;
                        oscar['x'] = options;
                        tango = tango.h;
                        tango = tango / golf;
                        tango = report + tango;
                        oscar['y'] = tango;
                        report = _closure3_slot0;
                        tango = report.rotateAroundOriginAndDraw;
                        zulu = zulu.rotation;
                        mike = function() {
                            oscar = _closure3_slot0;
                            report = oscar.drawImage;
                            mike = _closure4_slot0;
                            tango = mike.key;
                            offset = _closure4_slot1;
                            mike = {};
                            options = _closure1_slot0;
                            golf = _closure1_slot2;
                            entity = 2;
                            golf = golf[entity];
                            entity = undefined;
                            entity = options.bind(entity)(golf);
                            entity = entity.FillMode;
                            entity = entity.Contain;
                            mike['fillMode'] = entity;
                            yankee = {'x': 0, 'y': 0};
                            foxtrot = oscar;
                            romeo = tango;
                            verify = mike;
                            entity = foxtrot[report](romeo, yankee, offset, verify, options);
                            return entity;
                        };
                        mike = tango.bind(report)(oscar, zulu, mike);
 566:
                        zulu = _closure3_slot0;
                        mike = zulu.setFilter;
                        entity = {};
                        tango = 0;
                        entity['blur'] = tango;
                        entity = mike.bind(zulu)(entity);
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
                mike = undefined;
                report = 0;
                if(!entity) { _fun121187_ip = 170; continue _fun121187 }
 151:
                entity = zulu.bind(mike)();
                report = report + 1;
                _closure3_slot4 = report;
                entity = _closure2_slot6;
                if(report < entity) { _fun121187_ip = 151; continue _fun121187 }
 170:
                entity = undefined;
                return entity;
            }
        };
        entity['draw'] = oscar;
        report = function(argFoo, argBar) { // Original name: emit
            _fun121192: for(var _fun121192_ip = 0; ; ) switch(_fun121192_ip) {
 0:
                sizing = argFoo;
                zulu = argBar;
                tango = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 5;
                mike = mike[entity];
                entity = undefined;
                tango = tango.bind(entity)(mike);
                mike = tango.isProbablyAValidSnowflake;
                oscar = mike.bind(tango)(sizing);
                tango = _closure2_slot5;
                report = false;
                backup = tango;
                if(!(report === oscar)) { _fun121192_ip = 104; continue _fun121192 }
 58:
                report = global;
                golf = report.Math;
                oscar = golf.max;
                offset = report.Math;
                verify = offset.min;
                report = 3;
                options = tango / report;
                tango = 10;
                tango = verify.bind(offset)(options, tango);
                backup = oscar.bind(golf)(tango, report);
 104:
                tango = _closure2_slot7;
                tango = tango.freeParticles;
                report = tango.current;
                foxtrot = 2;
                tango = backup / foxtrot;
                if(!(!(report < tango))) { _fun121192_ip = 886; continue _fun121192 }
 133:
                tango = zulu.x;
                romeo = 0;
                tango = romeo === tango;
                if(!tango) { _fun121192_ip = 156; continue _fun121192 }
 147:
                report = zulu.y;
                tango = romeo === report;
 156:
                if(!tango) { _fun121192_ip = 168; continue _fun121192 }
 159:
                report = zulu.w;
                tango = romeo === report;
 168:
                if(!tango) { _fun121192_ip = 176; continue _fun121192 }
 171:
                tango = zulu.h;
 176:
                yankee = {};
                tango = _closure2_slot0;
                oscar = tango.h;
                report = 8;
                report = oscar / report;
                yankee['min'] = report;
                oscar = tango.h;
                report = 3;
                report = oscar / report;
                yankee['max'] = report;
                report = zulu.y;
                tango = tango.h;
                golf = 0.66;
                tango = golf * tango;
                if(!(report < tango)) { _fun121192_ip = 293; continue _fun121192 }
 242:
                tango = global;
                oscar = tango.Math;
                report = oscar.max;
                tango = zulu.y;
                zulu = _closure2_slot0;
                zulu = zulu.h;
                zulu = golf * zulu;
                tango = tango / zulu;
                zulu = 0.2;
                zulu = report.bind(oscar)(zulu, tango);
 293:
                output = romeo < backup;
                offset = 1;
                verify = 6;
                zulu = true;
                options = 30;
                golf = global;
                oscar = -50;
                report = 50;
                tango = 0;
                if(!output) { _fun121192_ip = 876; continue _fun121192 }
 327:
                vacuum = {};
                echo = _closure1_slot0;
                output = _closure1_slot2;
                result = output[verify];
                sequence = echo.bind(entity)(result);
                control = sequence.random;
                result = _closure2_slot1;
                update = result.x;
                source = -update;
                update = result.x;
                update = control.bind(sequence)(source, update, zulu);
                vacuum['x'] = update;
                source = result.y;
                update = output[verify];
                config = echo.bind(entity)(update);
                sequence = config.random;
                update = yankee.min;
                control = -update;
                update = yankee.max;
                update = sequence.bind(config)(control, update, zulu);
                update = source + update;
                vacuum['y'] = update;
                update = output[verify];
                source = echo.bind(entity)(update);
                update = source.random;
                control = update.bind(source)(romeo, options);
                sequence = golf.Math;
                source = sequence.atan2;
                update = result.y;
                config = -update;
                update = output[verify];
                papa = echo.bind(entity)(update);
                context = papa.random;
                update = yankee.min;
                record = -update;
                update = yankee.max;
                update = context.bind(papa)(record, update, zulu);
                update = config - update;
                config = output[verify];
                context = echo.bind(entity)(config);
                record = context.random;
                config = result.x;
                config = -config;
                result = result.x;
                result = record.bind(context)(config, result, zulu);
                update = source.bind(sequence)(update, result);
                result = output[verify];
                source = echo.bind(entity)(result);
                result = source.random;
                result = result.bind(source)(oscar, report);
                source = update * result;
                sequence = {};
                result = _closure2_slot0;
                update = result.w;
                config = update / foxtrot;
                update = output[verify];
                record = echo.bind(entity)(update);
                update = record.random;
                update = update.bind(record)(oscar, report);
                update = config + update;
                sequence['x'] = update;
                update = result.h;
                result = _closure2_slot4;
                result = update - result;
                output = output[verify];
                echo = echo.bind(entity)(output);
                output = echo.random;
                output = output.bind(echo)(oscar, report);
                output = result + output;
                sequence['y'] = output;
                output = _closure2_slot6;
                output = romeo < output;
                result = 0;
                if(!output) { _fun121192_ip = 853; continue _fun121192 }
 676:
                output = _closure2_slot7;
                output = output.particleStates;
                output = output.current;
                echo = output[result];
                output = _closure1_slot5;
                output = output.FREE;
                update = result;
                if(!(echo !== output)) { _fun121192_ip = 729; continue _fun121192 }
 712:
                result = update + offset;
                output = _closure2_slot6;
                if(result < output) { _fun121192_ip = 676; continue _fun121192 }
 724:
                _fun121192_ip = 853; continue _fun121192;
 729:
                output = _closure2_slot7;
                result = output.particles;
                echo = result.current;
                result = {};
                result['key'] = sizing;
                result['position'] = sequence;
                result['velocity'] = vacuum;
                vacuum = _closure1_slot6;
                vacuum = vacuum.bind(entity)();
                result['scale'] = vacuum;
                result['rotation'] = control;
                result['angularVelocity'] = source;
                echo[update] = result;
                result = output.particleStates;
                echo = result.current;
                result = _closure1_slot5;
                result = result.ACTIVE;
                echo[update] = result;
                echo = output.freeParticles;
                result = echo.current;
                result = result - offset;
                echo['current'] = result;
                result = output.activeParticles;
                output = result.current;
                output = output + offset;
                result['current'] = output;
 853:
                result = _closure1_slot8;
                output = _closure2_slot7;
                output = result.bind(entity)(output);
                tango = tango + 1;
                if(tango < backup) { _fun121192_ip = 327; continue _fun121192 }
 876:
                mike = _closure2_slot8;
                mike['current'] = zulu;
 886:
                return entity;
            }
        };
        entity['emit'] = report;
        entity['tickRate'] = tango;
        entity['improvePerformance'] = zulu;
        entity['shouldTick'] = mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();