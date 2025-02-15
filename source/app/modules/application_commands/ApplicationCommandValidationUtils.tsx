// app/modules/application_commands/ApplicationCommandValidationUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
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
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot5;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot5;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
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
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
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
                    _fun00004_ip = 67; continue _fun00003;
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
    var _closure1_slot4 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    mike = function(argFoo) { // Original name: validateOptionContent
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            report = entity.option;
            oscar = entity.content;
            romeo = entity.guildId;
            yankee = entity.channelId;
            mike = entity.allowEmptyValues;
            offset = entity.commandOrigin;
            golf = undefined;
            if(!(offset === golf)) { _fun00008_ip = 77; continue _fun00007 }
 42:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 1;
            entity = tango[entity];
            entity = zulu.bind(golf)(entity);
            entity = entity.CommandOrigin;
            offset = entity.CHAT;
 77:
            verify = null;
            entity = verify != oscar;
            zulu = '';
            tango = zulu;
            if(!entity) { _fun00008_ip = 148; continue _fun00007 }
 93:
            options = _closure1_slot0;
            foxtrot = _closure1_slot2;
            entity = 2;
            entity = foxtrot[entity];
            backup = options.bind(golf)(entity);
            foxtrot = backup.getString;
            options = {};
            options['content'] = oscar;
            entity = 'content';
            options = foxtrot.bind(backup)(options, entity);
            entity = options.trim;
            tango = entity.bind(options)();
 148:
            entity = report.required;
            if(!(verify != oscar)) { _fun00008_ip = 411; continue _fun00007 }
 161:
            if(!(zulu !== tango)) { _fun00008_ip = 297; continue _fun00007 }
 168:
            options = oscar.length;
            zulu = 1;
            if(!(!(options > zulu))) { _fun00008_ip = 188; continue _fun00007 }
 180:
            zulu = 0;
            options = oscar[zulu];
            _fun00008_ip = 205; continue _fun00007;
 188:
            zulu = {};
            oscar = 'text';
            zulu['type'] = oscar;
            zulu['text'] = tango;
            options = zulu;
 205:
            oscar = _closure1_slot1;
            foxtrot = _closure1_slot2;
            zulu = 4;
            zulu = foxtrot[zulu];
            oscar = oscar.bind(golf)(zulu);
            zulu = report.type;
            zulu = oscar[zulu];
            update = oscar;
            echo = options;
            result = report;
            output = yankee;
            sizing = romeo;
            kilo = offset;
            zulu = update[zulu](echo, result, output, sizing, kilo, backup);
            oscar = zulu.success;
            if(oscar) { _fun00008_ip = 277; continue _fun00007 }
 268:
            options = zulu.error;
            oscar = verify != options;
 277:
            if(oscar) { _fun00008_ip = 295; continue _fun00007 }
 280:
            tango = _closure1_slot3;
            tango = tango.bind(golf)(report);
            zulu['error'] = tango;
 295:
            return zulu;
 297:
            if(mike) { _fun00008_ip = 397; continue _fun00007 }
 300:
            zulu = {};
            mike = false;
            zulu['success'] = mike;
            if(entity) { _fun00008_ip = 333; continue _fun00007 }
 315:
            mike = _closure1_slot3;
            mike = mike.bind(golf)(report);
            zulu['error'] = mike;
            mike = zulu;
            _fun00008_ip = 395; continue _fun00007;
 333:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            tango = 3;
            report = verify[tango];
            report = options.bind(golf)(report);
            oscar = report.intl;
            report = oscar.string;
            tango = verify[tango];
            tango = options.bind(golf)(tango);
            tango = tango.t;
            tango = tango.JZJQLy;
            tango = report.bind(oscar)(tango);
            zulu['error'] = tango;
            mike = zulu;
 395:
            _fun00008_ip = 409; continue _fun00007;
 397:
            zulu = {};
            tango = true;
            zulu['success'] = tango;
            mike = zulu;
 409:
            return mike;
 411:
            if(entity) { _fun00008_ip = 425; continue _fun00007 }
 414:
            entity = {};
            mike = true;
            entity['success'] = mike;
            _fun00008_ip = 499; continue _fun00007;
 425:
            mike = {};
            zulu = false;
            mike['success'] = zulu;
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 3;
            tango = options[zulu];
            tango = oscar.bind(golf)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = oscar.bind(golf)(zulu);
            zulu = zulu.t;
            zulu = zulu.JZJQLy;
            zulu = tango.bind(report)(zulu);
            mike['error'] = zulu;
            entity = mike;
 499:
            return entity;
        }
    };
    var _closure1_slot6 = mike;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = oscar.bind(entity)(report);
    report = report.getValidationErrorText;
    var _closure1_slot3 = report;
    report = 5;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/application_commands/ApplicationCommandValidationUtils.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: getValidationResults
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            offset = argBar;
            verify = argBaz;
            options = argCorge;
            golf = argGrault;
            entity = {};
            mike = argFoo;
            zulu = mike.options;
            mike = null;
            if(!(mike != zulu)) { _fun00010_ip = 127; continue _fun00009 }
 28:
            mike = _closure1_slot4;
            report = undefined;
            tango = mike.bind(report)(zulu);
            zulu = tango.bind(report)();
            mike = zulu.done;
            if(mike) { _fun00010_ip = 125; continue _fun00009 }
 54:
            backup = zulu.value;
            mike = backup.name;
            foxtrot = offset[mike];
            yankee = backup.name;
            romeo = _closure1_slot6;
            mike = {};
            mike['option'] = backup;
            mike['content'] = foxtrot;
            mike['guildId'] = verify;
            mike['channelId'] = options;
            mike['allowEmptyValues'] = golf;
            mike = romeo.bind(report)(mike);
            entity[yankee] = mike;
            yankee = tango.bind(report)();
            mike = yankee.done;
            zulu = yankee;
            if(!mike) { _fun00010_ip = 54; continue _fun00009 }
 125:
            return entity;
 127:
            return entity;
        }
    };
    zulu['getValidationResults'] = tango;
    zulu['validateOptionContent'] = mike;
    return entity;
})();