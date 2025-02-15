// app/modules/canvas/DiscordCanvasRenderer.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot9;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot9 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo, argBar) { // Original name: DiscordCanvasRenderer
            zulu = argFoo;
            golf = this;
            entity = _closure1_slot3;
            oscar = _closure2_slot0;
            tango = undefined;
            entity = entity.bind(tango)(golf, oscar);
            report = _closure1_slot8;
            entity = new Array(2);
            entity[0] = zulu;
            options = argBar;
            entity[1] = options;
            entity = report.bind(tango)(golf, oscar, entity);
            report = {'w': 0, 'h': 0};
            entity['size'] = report;
            entity['canvas'] = zulu;
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 5;
            mike = report[mike];
            mike = zulu.bind(tango)(mike);
            zulu = mike.Skia;
            mike = zulu.Paint;
            mike = mike.bind(zulu)();
            entity['paint'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'setCanvasRef';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            mike = argFoo;
            entity = this;
            entity['canvasRef'] = mike;
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(21);
        entity[0] = report;
        report = {};
        golf = 'getCanvasForExport';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                mike = this;
                zulu = mike.canvasRef;
                entity = null;
                if(!(entity == zulu)) { _fun00006_ip = 19; continue _fun00005 }
 15:
                entity = undefined;
                return entity;
 19:
                zulu = mike.canvasRef;
                entity = 'makeImageSnapshot';
                entity = entity in zulu;
                mike = mike.canvasRef;
                if(entity) { _fun00006_ip = 49; continue _fun00005 }
 42:
                entity = mike.current;
                _fun00006_ip = 52; continue _fun00005;
 49:
                entity = mike;
 52:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'setSize';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = argFoo;
            entity = this;
            entity['size'] = mike;
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'restoreContext';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'setColor';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = this;
            entity = argFoo;
            mike['color'] = entity;
            tango = mike.paint;
            zulu = tango.setColor;
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            entity = 5;
            report = report[entity];
            entity = undefined;
            report = oscar.bind(entity)(report);
            oscar = report.Skia;
            report = oscar.Color;
            mike = mike.color;
            mike = report.bind(oscar)(mike);
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'setContextProperties';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zulu = this;
                golf = zulu.paint;
                report = golf.setColor;
                options = _closure1_slot0;
                entity = _closure1_slot2;
                oscar = 5;
                tango = entity[oscar];
                entity = undefined;
                tango = options.bind(entity)(tango);
                verify = tango.Skia;
                options = verify.Color;
                tango = zulu.color;
                tango = options.bind(verify)(tango);
                tango = report.bind(golf)(tango);
                tango = zulu.paint;
                zulu = tango.setStyle;
                report = _closure1_slot0;
                mike = _closure1_slot2;
                mike = mike[oscar];
                mike = report.bind(entity)(mike);
                mike = mike.PaintStyle;
                report = argFoo;
                if(report) { _fun00008_ip = 120; continue _fun00007 }
 107:
                report = mike.Stroke;
                report = zulu.bind(tango)(report);
                _fun00008_ip = 131; continue _fun00007;
 120:
                mike = mike.Fill;
                mike = zulu.bind(tango)(mike);
 131:
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'rotateAroundOriginAndDraw';
        report['key'] = golf;
        golf = function(argFoo, argBar, argBaz) { // Original name: value
            entity = argFoo;
            mike = this;
            tango = mike.canvas;
            zulu = tango.save;
            zulu = zulu.bind(tango)();
            report = mike.canvas;
            tango = report.translate;
            zulu = entity.x;
            entity = entity.y;
            entity = tango.bind(report)(zulu, entity);
            report = mike.canvas;
            tango = report.rotate;
            zulu = argBar;
            entity = 0;
            entity = tango.bind(report)(zulu, entity, entity);
            zulu = argBaz;
            entity = undefined;
            zulu = zulu.bind(entity)();
            zulu = mike.canvas;
            mike = zulu.restore;
            mike = mike.bind(zulu)();
            return entity;
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'clearRect';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            tango = entity.canvas;
            zulu = tango.clear;
            report = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            mike = report.bind(entity)(mike);
            oscar = mike.Skia;
            report = oscar.Color;
            mike = 'transparent';
            mike = report.bind(oscar)(mike);
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'drawRect';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zulu = argFoo;
                report = arguments[1];
                mike = this;
                entity = undefined;
                if(!(report === entity)) { _fun00010_ip = 17; continue _fun00009 }
 15:
                report = true;
 17:
                tango = mike.setContextProperties;
                tango = tango.bind(mike)(report);
                verify = zulu.x;
                options = zulu.y;
                golf = zulu.w;
                oscar = zulu.h;
                report = mike.canvas;
                tango = report.drawRect;
                zulu = {};
                zulu['x'] = verify;
                zulu['y'] = options;
                zulu['width'] = golf;
                zulu['height'] = oscar;
                mike = mike.paint;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            }
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'drawRoundedRect';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zulu = argFoo;
                oscar = argBar;
                report = arguments[2];
                mike = this;
                entity = undefined;
                if(!(report === entity)) { _fun00012_ip = 20; continue _fun00011 }
 18:
                report = true;
 20:
                tango = mike.setContextProperties;
                tango = tango.bind(mike)(report);
                yankee = zulu.x;
                offset = zulu.y;
                verify = zulu.w;
                options = zulu.h;
                report = mike.canvas;
                tango = report.drawRRect;
                zulu = {};
                golf = {};
                golf['x'] = yankee;
                golf['y'] = offset;
                golf['width'] = verify;
                golf['height'] = options;
                zulu['rect'] = golf;
                zulu['rx'] = oscar;
                zulu['ry'] = oscar;
                mike = mike.paint;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            }
        };
        report['value'] = golf;
        entity[9] = report;
        report = {};
        golf = 'drawText';
        report['key'] = golf;
        golf = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tango = argBar;
                entity = this;
                zulu = entity.setContextProperties;
                mike = argBaz;
                mike = zulu.bind(entity)(mike);
                mike = entity.font;
                zulu = mike.weight;
                report = null;
                oscar = report != zulu;
                mike = 300;
                options = mike;
                if(!oscar) { _fun00014_ip = 53; continue _fun00013 }
 50:
                options = zulu;
 53:
                zulu = 'normal';
                if(!(zulu === options)) { _fun00014_ip = 64; continue _fun00013 }
 61:
                options = mike;
 64:
                mike = 'bold';
                if(!(mike === options)) { _fun00014_ip = 78; continue _fun00013 }
 72:
                options = 700;
 78:
                verify = {};
                mike = entity.font;
                zulu = mike.truncate;
                oscar = _closure1_slot0;
                mike = _closure1_slot2;
                yankee = 6;
                mike = mike[yankee];
                offset = undefined;
                mike = oscar.bind(offset)(mike);
                mike = mike.TextTruncationMethod;
                mike = mike.None;
                if(!(zulu === mike)) { _fun00014_ip = 158; continue _fun00013 }
 133:
                mike = 1;
                verify['maxLines'] = mike;
                mike = inf;
                tango['w'] = mike;
 158:
                mike = entity.font;
                zulu = mike.truncate;
                oscar = _closure1_slot0;
                mike = _closure1_slot2;
                mike = mike[yankee];
                mike = oscar.bind(offset)(mike);
                mike = mike.TextTruncationMethod;
                mike = mike.Truncate;
                if(!(zulu === mike)) { _fun00014_ip = 224; continue _fun00013 }
 203:
                mike = 1;
                verify['maxLines'] = mike;
                mike = '...';
                verify['ellipsis'] = mike;
 224:
                mike = entity.font;
                zulu = mike.truncate;
                oscar = _closure1_slot0;
                mike = _closure1_slot2;
                mike = mike[yankee];
                mike = oscar.bind(offset)(mike);
                mike = mike.TextTruncationMethod;
                mike = mike.Wrap;
                if(!(zulu === mike)) { _fun00014_ip = 437; continue _fun00013 }
 272:
                mike = '...';
                verify['ellipsis'] = mike;
                mike = tango.h;
                if(!(report == mike)) { _fun00014_ip = 314; continue _fun00013 }
 293:
                mike = inf;
                verify['maxLines'] = mike;
                _fun00014_ip = 437; continue _fun00013;
 314:
                zulu = global;
                yankee = zulu.Math;
                oscar = yankee.floor;
                romeo = tango.h;
                mike = entity.font;
                mike = mike.size;
                mike = romeo / mike;
                mike = oscar.bind(yankee)(mike);
                yankee = _closure1_slot1;
                romeo = _closure1_slot2;
                oscar = 7;
                oscar = romeo[oscar];
                yankee = yankee.bind(offset)(oscar);
                oscar = 0;
                oscar = mike > oscar;
                kilo = tango.h;
                romeo = entity.font;
                backup = romeo.size;
                zulu = zulu.HermesInternal;
                foxtrot = zulu.concat;
                romeo = 'DiscordCavas: boundingBox.h of ';
                zulu = ' results in 0 visible lines with font size of ';
                zulu = foxtrot.bind(romeo)(kilo, zulu, backup);
                zulu = yankee.bind(offset)(oscar, zulu);
                verify['maxLines'] = mike;
 437:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                yankee = 5;
                mike = mike[yankee];
                mike = zulu.bind(offset)(mike);
                mike = mike.Skia;
                oscar = mike.ParagraphBuilder;
                zulu = oscar.Make;
                romeo = entity.assetMap;
                foxtrot = report == romeo;
                mike = undefined;
                if(foxtrot) { _fun00014_ip = 498; continue _fun00013 }
 492:
                mike = romeo.fontManager;
 498:
                oscar = zulu.bind(oscar)(verify, mike);
                zulu = oscar.pushStyle;
                mike = {};
                verify = _closure1_slot0;
                golf = _closure1_slot2;
                golf = golf[yankee];
                golf = verify.bind(offset)(golf);
                offset = golf.Skia;
                verify = offset.Color;
                golf = entity.color;
                golf = verify.bind(offset)(golf);
                mike['color'] = golf;
                golf = entity.font;
                golf = golf.family;
                mike['fontFamilies'] = golf;
                golf = entity.font;
                golf = golf.size;
                mike['fontSize'] = golf;
                golf = {};
                golf['weight'] = options;
                mike['fontStyle'] = golf;
                oscar = zulu.bind(oscar)(mike);
                zulu = oscar.addText;
                mike = argFoo;
                zulu = zulu.bind(oscar)(mike);
                mike = zulu.build;
                options = mike.bind(zulu)();
                zulu = options.layout;
                mike = tango.w;
                if(!(report == mike)) { _fun00014_ip = 666; continue _fun00013 }
 647:
                report = entity.size;
                oscar = report.w;
                report = tango.x;
                mike = oscar - report;
 666:
                mike = zulu.bind(options)(mike);
                mike = options.getMaxWidth;
                zulu = mike.bind(options)();
                mike = options.getHeight;
                mike = mike.bind(options)();
                golf = options.paint;
                oscar = entity.canvas;
                report = tango.x;
                verify = tango.y;
                entity = 2;
                entity = mike / entity;
                entity = verify - entity;
                entity = golf.bind(options)(oscar, report, entity);
                entity = {};
                report = tango.x;
                entity['x'] = report;
                tango = tango.y;
                entity['y'] = tango;
                entity['w'] = zulu;
                entity['h'] = mike;
                return entity;
            }
        };
        report['value'] = golf;
        entity[10] = report;
        report = {};
        golf = 'drawFormattedMessage';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[11] = report;
        report = {};
        golf = 'drawImage';
        report['key'] = golf;
        golf = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                options = argFoo;
                romeo = argBar;
                oscar = argBaz;
                output = arguments[3];
                golf = this;
                zulu = undefined;
                if(!(output === zulu)) { _fun00016_ip = 66; continue _fun00015 }
 21:
                entity = {};
                tango = _closure1_slot0;
                report = _closure1_slot2;
                mike = 6;
                mike = report[mike];
                mike = tango.bind(zulu)(mike);
                mike = mike.FillMode;
                mike = mike.Stretch;
                entity['fillMode'] = mike;
                output = entity;
 66:
                tango = _closure1_slot1;
                report = _closure1_slot2;
                mike = 7;
                mike = report[mike];
                report = tango.bind(zulu)(mike);
                mike = golf.assetMap;
                backup = null;
                tango = backup != mike;
                mike = 'DiscordCavas: `drawImage` requires an AssetMap to be initialized.';
                mike = report.bind(zulu)(tango, mike);
                tango = golf.assetMap;
                mike = tango.get;
                update = mike.bind(tango)(options);
                if(!(backup != update)) { _fun00016_ip = 1058; continue _fun00015 }
 136:
                verify = output.fillMode;
                mike = update.width;
                offset = mike.bind(update)();
                mike = update.height;
                mike = mike.bind(update)();
                if(!(backup != oscar)) { _fun00016_ip = 239; continue _fun00015 }
 164:
                yankee = _closure1_slot0;
                tango = _closure1_slot2;
                report = 6;
                tango = tango[report];
                tango = yankee.bind(zulu)(tango);
                tango = tango.FillMode;
                tango = tango.Contain;
                if(!(verify !== tango)) { _fun00016_ip = 776; continue _fun00015 }
 203:
                yankee = _closure1_slot0;
                tango = _closure1_slot2;
                tango = tango[report];
                tango = yankee.bind(zulu)(tango);
                tango = tango.FillMode;
                tango = tango.Cover;
                if(!(verify !== tango)) { _fun00016_ip = 427; continue _fun00015 }
 239:
                echo = {};
                tango = romeo.x;
                echo['x'] = tango;
                tango = romeo.y;
                echo['y'] = tango;
                tango = backup == oscar;
                verify = undefined;
                if(tango) { _fun00016_ip = 273; continue _fun00015 }
 268:
                verify = oscar.w;
 273:
                tango = offset;
                if(!(backup != verify)) { _fun00016_ip = 283; continue _fun00015 }
 280:
                tango = verify;
 283:
                echo['width'] = tango;
                tango = backup == oscar;
                verify = undefined;
                if(tango) { _fun00016_ip = 301; continue _fun00015 }
 296:
                verify = oscar.h;
 301:
                tango = mike;
                if(!(backup != verify)) { _fun00016_ip = 311; continue _fun00015 }
 308:
                tango = verify;
 311:
                echo['height'] = tango;
                result = golf.canvas;
                sizing = result.drawImageNine;
                kilo = {'x': 0, 'y': 0};
                kilo['width'] = offset;
                kilo['height'] = mike;
                verify = _closure1_slot0;
                yankee = _closure1_slot2;
                tango = 5;
                tango = yankee[tango];
                tango = verify.bind(zulu)(tango);
                tango = tango.FilterMode;
                control = tango.Linear;
                source = golf.paint;
                record = result;
                config = update;
                sequence = kilo;
                vacuum = echo;
                tango = record[sizing](config, sequence, vacuum, control, source, update);
                tango = 6;
                tango = yankee[tango];
                tango = verify.bind(zulu)(tango);
                tango = tango.DrawResultStatus;
                tango = tango.Success;
                return tango;
 427:
                verify = offset / mike;
                tango = verify.toFixed;
                foxtrot = 1;
                tango = tango.bind(verify)(foxtrot);
                verify = tango - 0;
                yankee = oscar.w;
                tango = oscar.h;
                yankee = yankee / tango;
                tango = yankee.toFixed;
                tango = tango.bind(yankee)(foxtrot);
                tango = tango - 0;
                if(!(!(tango > verify))) { _fun00016_ip = 588; continue _fun00015 }
 480:
                foxtrot = mike * tango;
                verify = {};
                yankee = {};
                sizing = offset - foxtrot;
                kilo = backup == output;
                result = undefined;
                if(kilo) { _fun00016_ip = 521; continue _fun00015 }
 501:
                kilo = output.focus;
                echo = backup == kilo;
                result = undefined;
                if(echo) { _fun00016_ip = 521; continue _fun00015 }
 516:
                result = kilo.x;
 521:
                echo = backup != result;
                kilo = 0.5;
                if(!echo) { _fun00016_ip = 541; continue _fun00015 }
 538:
                kilo = result;
 541:
                kilo = sizing * kilo;
                yankee['x'] = kilo;
                kilo = 0;
                yankee['y'] = kilo;
                config = verify;
                sequence = yankee;
                yankee = copyDataProperties(config, sequence);
                yankee = 'w';
                verify[yankee] = foxtrot;
                yankee = 'h';
                verify[yankee] = mike;
                yankee = verify;
                _fun00016_ip = 694; continue _fun00015;
 588:
                foxtrot = offset / tango;
                tango = {};
                verify = {};
                kilo = 0;
                verify['x'] = kilo;
                kilo = mike - foxtrot;
                result = backup == output;
                sizing = undefined;
                if(result) { _fun00016_ip = 635; continue _fun00015 }
 615:
                output = output.focus;
                result = backup == output;
                sizing = undefined;
                if(result) { _fun00016_ip = 635; continue _fun00015 }
 630:
                sizing = output.y;
 635:
                output = backup != sizing;
                backup = 0.5;
                if(!output) { _fun00016_ip = 655; continue _fun00015 }
 652:
                backup = sizing;
 655:
                backup = kilo * backup;
                verify['y'] = backup;
                config = tango;
                sequence = verify;
                verify = copyDataProperties(config, sequence);
                verify = 'w';
                tango[verify] = offset;
                verify = 'h';
                tango[verify] = foxtrot;
                yankee = tango;
 694:
                verify = golf.drawCroppedImage;
                tango = {};
                foxtrot = romeo.x;
                tango['x'] = foxtrot;
                foxtrot = romeo.y;
                tango['y'] = foxtrot;
                foxtrot = oscar.w;
                tango['w'] = foxtrot;
                foxtrot = oscar.h;
                tango['h'] = foxtrot;
                tango = verify.bind(golf)(options, yankee, tango);
                verify = _closure1_slot0;
                tango = _closure1_slot2;
                tango = tango[report];
                tango = verify.bind(zulu)(tango);
                tango = tango.DrawResultStatus;
                tango = tango.Success;
                return tango;
 776:
                verify = offset / mike;
                tango = verify.toFixed;
                foxtrot = 1;
                tango = tango.bind(verify)(foxtrot);
                yankee = tango - 0;
                verify = oscar.w;
                tango = oscar.h;
                verify = verify / tango;
                tango = verify.toFixed;
                tango = tango.bind(verify)(foxtrot);
                tango = tango - 0;
                if(!(!(tango > yankee))) { _fun00016_ip = 893; continue _fun00015 }
 829:
                tango = oscar.w;
                tango = tango / yankee;
                verify = {};
                foxtrot = romeo.x;
                verify['x'] = foxtrot;
                backup = romeo.y;
                foxtrot = oscar.h;
                kilo = foxtrot - tango;
                foxtrot = 2;
                foxtrot = kilo / foxtrot;
                foxtrot = backup + foxtrot;
                verify['y'] = foxtrot;
                foxtrot = oscar.w;
                verify['w'] = foxtrot;
                verify['h'] = tango;
                _fun00016_ip = 958; continue _fun00015;
 893:
                tango = oscar.h;
                yankee = tango * yankee;
                tango = {};
                backup = romeo.x;
                foxtrot = oscar.w;
                kilo = foxtrot - yankee;
                foxtrot = 2;
                foxtrot = kilo / foxtrot;
                foxtrot = backup + foxtrot;
                tango['x'] = foxtrot;
                romeo = romeo.y;
                tango['y'] = romeo;
                tango['w'] = yankee;
                oscar = oscar.h;
                tango['h'] = oscar;
                verify = tango;
 958:
                oscar = golf.drawCroppedImage;
                tango = {'x': 0, 'y': 0};
                tango['w'] = offset;
                tango['h'] = mike;
                mike = {};
                offset = verify.x;
                mike['x'] = offset;
                offset = verify.y;
                mike['y'] = offset;
                offset = verify.w;
                mike['w'] = offset;
                verify = verify.h;
                mike['h'] = verify;
                mike = oscar.bind(golf)(options, tango, mike);
                tango = _closure1_slot0;
                mike = _closure1_slot2;
                mike = mike[report];
                mike = tango.bind(zulu)(mike);
                mike = mike.DrawResultStatus;
                mike = mike.Success;
                return mike;
 1058:
                mike = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 6;
                entity = tango[entity];
                entity = mike.bind(zulu)(entity);
                entity = entity.DrawResultStatus;
                entity = entity.ImageNotLoaded;
                return entity;
            }
        };
        report['value'] = golf;
        entity[12] = report;
        report = {};
        golf = 'drawRoundedImage';
        report['key'] = golf;
        golf = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: value
            oscar = argBar;
            report = argBaz;
            entity = argCorge;
            mike = this;
            romeo = oscar.x;
            yankee = oscar.y;
            offset = report.w;
            verify = report.h;
            tango = mike.canvas;
            zulu = tango.save;
            zulu = zulu.bind(tango)();
            options = mike.canvas;
            golf = options.clipRRect;
            tango = {};
            zulu = {};
            zulu['x'] = romeo;
            zulu['y'] = yankee;
            zulu['width'] = offset;
            zulu['height'] = verify;
            tango['rect'] = zulu;
            tango['rx'] = entity;
            tango['ry'] = entity;
            verify = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 5;
            zulu = zulu[entity];
            entity = undefined;
            entity = verify.bind(entity)(zulu);
            entity = entity.ClipOp;
            zulu = entity.Intersect;
            entity = true;
            entity = golf.bind(options)(tango, zulu, entity);
            tango = mike.drawImage;
            sizing = argFoo;
            foxtrot = argGrault;
            output = mike;
            kilo = oscar;
            backup = report;
            entity = output[tango](sizing, kilo, backup, foxtrot, romeo);
            zulu = mike.canvas;
            mike = zulu.restore;
            mike = mike.bind(zulu)();
            return entity;
        };
        report['value'] = golf;
        entity[13] = report;
        report = {};
        golf = 'drawCroppedImage';
        report['key'] = golf;
        golf = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                report = argBar;
                tango = argBaz;
                mike = this;
                golf = _closure1_slot1;
                oscar = _closure1_slot2;
                zulu = 7;
                oscar = oscar[zulu];
                zulu = undefined;
                verify = golf.bind(zulu)(oscar);
                golf = mike.assetMap;
                oscar = null;
                options = oscar != golf;
                golf = 'DiscordCavas: `drawImage` requires an AssetMap to be initialized.';
                golf = verify.bind(zulu)(options, golf);
                verify = mike.assetMap;
                options = verify.get;
                golf = argFoo;
                options = options.bind(verify)(golf);
                if(!(oscar != options)) { _fun00018_ip = 228; continue _fun00017 }
 84:
                golf = {};
                oscar = report.x;
                golf['x'] = oscar;
                oscar = report.y;
                golf['y'] = oscar;
                oscar = report.w;
                golf['width'] = oscar;
                report = report.h;
                golf['height'] = report;
                oscar = {};
                report = tango.x;
                oscar['x'] = report;
                report = tango.y;
                oscar['y'] = report;
                report = tango.w;
                oscar['width'] = report;
                tango = tango.h;
                oscar['height'] = tango;
                report = mike.canvas;
                tango = report.drawImageRect;
                offset = mike.paint;
                backup = report;
                foxtrot = options;
                romeo = golf;
                yankee = oscar;
                mike = backup[tango](foxtrot, romeo, yankee, offset, verify);
                tango = _closure1_slot0;
                report = _closure1_slot2;
                mike = 6;
                mike = report[mike];
                mike = tango.bind(zulu)(mike);
                mike = mike.DrawResultStatus;
                mike = mike.Success;
                return mike;
 228:
                mike = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 6;
                entity = tango[entity];
                entity = mike.bind(zulu)(entity);
                entity = entity.DrawResultStatus;
                entity = entity.ImageNotLoaded;
                return entity;
            }
        };
        report['value'] = golf;
        entity[14] = report;
        report = {};
        golf = 'drawPath';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                options = argBar;
                golf = arguments[2];
                offset = arguments[3];
                mike = this;
                zulu = undefined;
                if(!(golf === zulu)) { _fun00020_ip = 20; continue _fun00019 }
 18:
                golf = true;
 20:
                if(!(offset === zulu)) { _fun00020_ip = 27; continue _fun00019 }
 24:
                offset = 1;
 27:
                report = _closure1_slot0;
                tango = _closure1_slot2;
                verify = 5;
                tango = tango[verify];
                tango = report.bind(zulu)(tango);
                tango = tango.Skia;
                oscar = tango.Path;
                report = oscar.MakeFromSVGString;
                tango = argFoo;
                oscar = report.bind(oscar)(tango);
                tango = null;
                if(!(tango != oscar)) { _fun00020_ip = 267; continue _fun00019 }
 85:
                yankee = _closure1_slot0;
                report = _closure1_slot2;
                report = report[verify];
                report = yankee.bind(zulu)(report);
                yankee = report.Skia;
                report = yankee.Matrix;
                report = report.bind(yankee)();
                romeo = report.translate;
                yankee = options.x;
                options = options.y;
                options = romeo.bind(report)(yankee, options);
                options = report.scale;
                options = options.bind(report)(offset, offset);
                if(!golf) { _fun00020_ip = 199; continue _fun00019 }
 155:
                if(!(tango != oscar)) { _fun00020_ip = 199; continue _fun00019 }
 159:
                golf = oscar.setFillType;
                options = _closure1_slot0;
                tango = _closure1_slot2;
                tango = tango[verify];
                tango = options.bind(zulu)(tango);
                tango = tango.FillType;
                tango = tango.EvenOdd;
                tango = golf.bind(oscar)(tango);
 199:
                tango = oscar.transform;
                tango = tango.bind(oscar)(report);
                report = mike.canvas;
                tango = report.drawPath;
                mike = mike.paint;
                mike = tango.bind(report)(oscar, mike);
                tango = _closure1_slot0;
                report = _closure1_slot2;
                mike = 6;
                mike = report[mike];
                mike = tango.bind(zulu)(mike);
                mike = mike.DrawResultStatus;
                mike = mike.Success;
                return mike;
 267:
                mike = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 6;
                entity = tango[entity];
                entity = mike.bind(zulu)(entity);
                entity = entity.DrawResultStatus;
                entity = entity.Failure;
                return entity;
            }
        };
        report['value'] = golf;
        entity[15] = report;
        report = {};
        golf = 'drawGradientRect';
        report['key'] = golf;
        golf = function(argFoo, argBar, argBaz, argCorge) { // Original name: value
            tango = argFoo;
            entity = this;
            var _closure3_slot0 = tango;
            report = tango.map;
            zulu = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 5;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                zulu = entity.Skia;
                mike = zulu.Color;
                entity = argFoo;
                entity = entity.color;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            backup = report.bind(tango)(zulu);
            zulu = tango.map;
            mike = function(argFoo, argBar) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    entity = argFoo;
                    entity = entity.stop;
                    mike = null;
                    if(!(mike == entity)) { _fun00022_ip = 34; continue _fun00021 }
 15:
                    mike = _closure3_slot0;
                    zulu = mike.length;
                    mike = argBar;
                    entity = mike / zulu;
 34:
                    return entity;
                }
            };
            foxtrot = zulu.bind(tango)(mike);
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            report = 5;
            oscar = tango[report];
            mike = undefined;
            oscar = zulu.bind(mike)(oscar);
            oscar = oscar.Skia;
            verify = oscar.Shader;
            options = verify.MakeLinearGradient;
            report = tango[report];
            report = zulu.bind(mike)(report);
            report = report.TileMode;
            romeo = report.Clamp;
            sizing = argBar;
            kilo = argBaz;
            output = verify;
            golf = output[options](sizing, kilo, backup, foxtrot, romeo, yankee);
            oscar = entity.paint;
            report = oscar.setShader;
            report = report.bind(oscar)(golf);
            oscar = entity.drawRect;
            report = argCorge;
            report = oscar.bind(entity)(report);
            oscar = entity.paint;
            report = oscar.setShader;
            entity = null;
            entity = report.bind(oscar)(entity);
            entity = 6;
            entity = tango[entity];
            entity = zulu.bind(mike)(entity);
            entity = entity.DrawResultStatus;
            entity = entity.Success;
            return entity;
        };
        report['value'] = golf;
        entity[16] = report;
        report = {};
        golf = 'drawRoundedGradientRect';
        report['key'] = golf;
        golf = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: value
            tango = argFoo;
            entity = this;
            var _closure3_slot0 = tango;
            report = tango.map;
            zulu = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 5;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                zulu = entity.Skia;
                mike = zulu.Color;
                entity = argFoo;
                entity = entity.color;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            backup = report.bind(tango)(zulu);
            zulu = tango.map;
            mike = function(argFoo, argBar) {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    entity = argFoo;
                    entity = entity.stop;
                    mike = null;
                    if(!(mike == entity)) { _fun00024_ip = 34; continue _fun00023 }
 15:
                    mike = _closure3_slot0;
                    zulu = mike.length;
                    mike = argBar;
                    entity = mike / zulu;
 34:
                    return entity;
                }
            };
            foxtrot = zulu.bind(tango)(mike);
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            report = 5;
            oscar = tango[report];
            mike = undefined;
            oscar = zulu.bind(mike)(oscar);
            oscar = oscar.Skia;
            verify = oscar.Shader;
            options = verify.MakeLinearGradient;
            report = tango[report];
            report = zulu.bind(mike)(report);
            report = report.TileMode;
            romeo = report.Clamp;
            sizing = argBar;
            kilo = argBaz;
            output = verify;
            golf = output[options](sizing, kilo, backup, foxtrot, romeo, yankee);
            oscar = entity.paint;
            report = oscar.setShader;
            report = report.bind(oscar)(golf);
            golf = entity.drawRoundedRect;
            oscar = argCorge;
            report = argGrault;
            report = golf.bind(entity)(oscar, report);
            oscar = entity.paint;
            report = oscar.setShader;
            entity = null;
            entity = report.bind(oscar)(entity);
            entity = 6;
            entity = tango[entity];
            entity = zulu.bind(mike)(entity);
            entity = entity.DrawResultStatus;
            entity = entity.Success;
            return entity;
        };
        report['value'] = golf;
        entity[17] = report;
        report = {};
        golf = 'clip';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[18] = report;
        report = {};
        golf = 'clipRect';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[19] = report;
        report = {};
        golf = 'clipRoundedRect';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = oscar;
        entity[20] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/canvas/DiscordCanvasRenderer.native.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();