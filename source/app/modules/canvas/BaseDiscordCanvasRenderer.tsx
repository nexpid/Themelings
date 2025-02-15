// app/modules/canvas/BaseDiscordCanvasRenderer.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun115183: for(var _fun115183_ip = 0; ; ) switch(_fun115183_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun115183_ip = 46; continue _fun115183 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun115183_ip = 55; continue _fun115183 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun115183_ip = 345; continue _fun115183 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun115183_ip = 323; continue _fun115183 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun115183_ip = 283; continue _fun115183 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun115183_ip = 270; continue _fun115183 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun115183_ip = 163; continue _fun115183 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun115183_ip = 179; continue _fun115183 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun115183_ip = 249; continue _fun115183 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun115183_ip = 249; continue _fun115183 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun115183_ip = 234; continue _fun115183 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun115183_ip = 247; continue _fun115183 }
 234:
            verify = _closure1_slot6;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun115183_ip = 265; continue _fun115183;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun115183_ip = 283; continue _fun115183;
 270:
            golf = _closure1_slot6;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun115183_ip = 323; continue _fun115183 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun115183_ip = 330; continue _fun115183 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun115184: for(var _fun115184_ip = 0; ; ) switch(_fun115184_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun115184_ip = 56; continue _fun115184 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun115184_ip = 67; continue _fun115184;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun115185: for(var _fun115185_ip = 0; ; ) switch(_fun115185_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun115185_ip = 23; continue _fun115185 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun115185_ip = 33; continue _fun115185 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun115185_ip = 70; continue _fun115185 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun115185_ip = 55; continue _fun115185 }
 70:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
    mike = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo, argBar) { // Original name: BaseDiscordCanvasRenderer
            zulu = this;
            report = _closure1_slot3;
            mike = _closure2_slot0;
            entity = undefined;
            mike = report.bind(entity)(zulu, mike);
            mike = 'black';
            zulu['color'] = mike;
            mike = {'style': 'normal', 'weight': 300};
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            tango = 2;
            tango = oscar[tango];
            tango = report.bind(entity)(tango);
            tango = tango.DEFAULT_FONT_SIZE;
            mike['size'] = tango;
            tango = ['serif'];
            mike['family'] = tango;
            tango = 3;
            tango = oscar[tango];
            tango = report.bind(entity)(tango);
            tango = tango.TextTruncationMethod;
            tango = tango.None;
            mike['truncate'] = tango;
            zulu['font'] = mike;
            mike = {'blur': 0, 'brightness': 1, 'contrast': 1, 'grayscale': 0, 'hueRotation': 0, 'invert': 0, 'opacity': 1, 'saturate': 1, 'sepia': 0};
            zulu['filter'] = mike;
            mike = argFoo;
            zulu['canvas'] = mike;
            mike = argBar;
            zulu['assetMap'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'getCanvas';
        entity['key'] = mike;
        mike = function() { // Original name: value
            entity = this;
            entity = entity.canvas;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(7);
        mike[0] = entity;
        entity = {};
        oscar = 'setColor';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            mike = argFoo;
            entity = this;
            entity['color'] = mike;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'setFont';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun115190: for(var _fun115190_ip = 0; ; ) switch(_fun115190_ip) {
 0:
                entity = argFoo;
                zulu = this;
                report = zulu.font;
                mike = entity.style;
                tango = null;
                if(!(tango == mike)) { _fun115190_ip = 34; continue _fun115190 }
 23:
                oscar = zulu.font;
                mike = oscar.style;
 34:
                report['style'] = mike;
                report = zulu.font;
                mike = entity.size;
                if(!(tango == mike)) { _fun115190_ip = 66; continue _fun115190 }
 55:
                oscar = zulu.font;
                mike = oscar.size;
 66:
                report['size'] = mike;
                report = zulu.font;
                mike = entity.weight;
                if(!(tango == mike)) { _fun115190_ip = 100; continue _fun115190 }
 88:
                oscar = zulu.font;
                mike = oscar.weight;
 100:
                report['weight'] = mike;
                report = zulu.font;
                mike = entity.family;
                if(!(tango == mike)) { _fun115190_ip = 134; continue _fun115190 }
 122:
                oscar = zulu.font;
                mike = oscar.family;
 134:
                report['family'] = mike;
                mike = zulu.font;
                entity = entity.truncate;
                if(!(tango == entity)) { _fun115190_ip = 168; continue _fun115190 }
 156:
                zulu = zulu.font;
                entity = zulu.truncate;
 168:
                mike['truncate'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'setFilter';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun115191: for(var _fun115191_ip = 0; ; ) switch(_fun115191_ip) {
 0:
                entity = argFoo;
                zulu = this;
                report = zulu.filter;
                mike = entity.blur;
                tango = null;
                if(!(tango == mike)) { _fun115191_ip = 34; continue _fun115191 }
 23:
                oscar = zulu.filter;
                mike = oscar.blur;
 34:
                report['blur'] = mike;
                report = zulu.filter;
                mike = entity.brightness;
                if(!(tango == mike)) { _fun115191_ip = 66; continue _fun115191 }
 55:
                oscar = zulu.filter;
                mike = oscar.brightness;
 66:
                report['brightness'] = mike;
                report = zulu.filter;
                mike = entity.contrast;
                if(!(tango == mike)) { _fun115191_ip = 98; continue _fun115191 }
 87:
                oscar = zulu.filter;
                mike = oscar.contrast;
 98:
                report['contrast'] = mike;
                report = zulu.filter;
                mike = entity.grayscale;
                if(!(tango == mike)) { _fun115191_ip = 130; continue _fun115191 }
 119:
                oscar = zulu.filter;
                mike = oscar.grayscale;
 130:
                report['grayscale'] = mike;
                report = zulu.filter;
                mike = entity.hueRotation;
                if(!(tango == mike)) { _fun115191_ip = 162; continue _fun115191 }
 151:
                oscar = zulu.filter;
                mike = oscar.hueRotation;
 162:
                report['hueRotation'] = mike;
                report = zulu.filter;
                mike = entity.invert;
                if(!(tango == mike)) { _fun115191_ip = 194; continue _fun115191 }
 183:
                oscar = zulu.filter;
                mike = oscar.invert;
 194:
                report['invert'] = mike;
                report = zulu.filter;
                mike = entity.opacity;
                if(!(tango == mike)) { _fun115191_ip = 224; continue _fun115191 }
 214:
                oscar = zulu.filter;
                mike = oscar.opacity;
 224:
                report['opacity'] = mike;
                report = zulu.filter;
                mike = entity.saturate;
                if(!(tango == mike)) { _fun115191_ip = 256; continue _fun115191 }
 245:
                oscar = zulu.filter;
                mike = oscar.saturate;
 256:
                report['saturate'] = mike;
                mike = zulu.filter;
                entity = entity.sepia;
                if(!(tango == entity)) { _fun115191_ip = 288; continue _fun115191 }
 277:
                zulu = zulu.filter;
                entity = zulu.sepia;
 288:
                mike['sepia'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'getFilterString';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            zulu = this;
            var _closure3_slot0 = zulu;
            mike = zulu.filter;
            golf = mike.blur;
            mike = global;
            tango = mike.HermesInternal;
            oscar = tango.concat;
            report = 'blur(';
            tango = 'px)';
            report = oscar.bind(report)(golf, tango);
            tango = new Array(2);
            tango[0] = report;
            zulu = zulu.filter;
            oscar = zulu.hueRotation;
            mike = mike.HermesInternal;
            report = mike.concat;
            zulu = 'hue-rotate(';
            mike = 'deg)';
            mike = report.bind(zulu)(oscar, mike);
            tango[1] = mike;
            zulu = new Array(0);
            options = 0;
            offset = zulu;
            verify = tango;
            options = arraySpread(offset, verify, options);
            report = ['brightness', 'contrast', 'grayscale', 'invert', 'opacity', 'saturate', 'sepia'];
            tango = report.map;
            entity = function(argFoo) {
                oscar = argFoo;
                entity = _closure3_slot0;
                entity = entity.filter;
                options = entity[oscar];
                entity = global;
                entity = entity.HermesInternal;
                tango = entity.concat;
                yankee = '';
                verify = '(';
                golf = ')';
                offset = oscar;
                entity = yankee[tango](offset, verify, options, golf, oscar);
                return entity;
            };
            verify = tango.bind(report)(entity);
            offset = zulu;
            entity = arraySpread(offset, verify, options);
            mike = zulu.join;
            entity = ' ';
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'getLoadedImage';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun115194: for(var _fun115194_ip = 0; ; ) switch(_fun115194_ip) {
 0:
                entity = this;
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 4;
                zulu = zulu[mike];
                mike = undefined;
                report = tango.bind(mike)(zulu);
                tango = entity.assetMap;
                zulu = null;
                tango = zulu != tango;
                zulu = 'DiscordCanvas: An AssetStore has not been initialized.';
                zulu = report.bind(mike)(tango, zulu);
                tango = entity.assetMap;
                zulu = tango.get;
                entity = argFoo;
                entity = zulu.bind(tango)(entity);
                if(!(mike === entity)) { _fun115194_ip = 77; continue _fun115194 }
 75:
                return mike;
 77:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'drawRoundedImageWithFallbacks';
        entity['key'] = oscar;
        report = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: value
            _fun115195: for(var _fun115195_ip = 0; ; ) switch(_fun115195_ip) {
 0:
                romeo = argBar;
                yankee = argBaz;
                offset = argCorge;
                verify = argGrault;
                options = this;
                tango = _closure1_slot5;
                zulu = undefined;
                mike = argFoo;
                golf = tango.bind(zulu)(mike);
                report = golf.bind(zulu)();
                mike = report.done;
                tango = 3;
                oscar = report;
                if(mike) { _fun115195_ip = 132; continue _fun115195 }
 50:
                result = oscar.value;
                mike = options.drawRoundedImage;
                echo = options;
                output = romeo;
                sizing = yankee;
                kilo = offset;
                backup = verify;
                mike = echo[mike](result, output, sizing, kilo, backup, foxtrot);
                foxtrot = _closure1_slot0;
                report = _closure1_slot2;
                report = report[tango];
                report = foxtrot.bind(zulu)(report);
                report = report.DrawResultStatus;
                report = report.Failure;
                if(!(mike === report)) { _fun115195_ip = 130; continue _fun115195 }
 113:
                foxtrot = golf.bind(zulu)();
                report = foxtrot.done;
                oscar = foxtrot;
                if(report) { _fun115195_ip = 132; continue _fun115195 }
 128:
                _fun115195_ip = 50; continue _fun115195;
 130:
                return mike;
 132:
                mike = _closure1_slot0;
                entity = _closure1_slot2;
                entity = entity[tango];
                entity = mike.bind(zulu)(entity);
                entity = entity.DrawResultStatus;
                entity = entity.Failure;
                return entity;
            }
        };
        entity['value'] = report;
        mike[6] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/canvas/BaseDiscordCanvasRenderer.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    zulu['BaseDiscordCanvasRenderer'] = mike;
    return entity;
})();