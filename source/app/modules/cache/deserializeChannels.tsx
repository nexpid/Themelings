// app/modules/cache/deserializeChannels.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    zulu = argFred;
    oscar = argPlugh;
    entity = argCorge;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun38159: for(var _fun38159_ip = 0; ; ) switch(_fun38159_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun38159_ip = 46; continue _fun38159 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun38159_ip = 55; continue _fun38159 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun38159_ip = 343; continue _fun38159 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun38159_ip = 323; continue _fun38159 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun38159_ip = 283; continue _fun38159 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun38159_ip = 270; continue _fun38159 }
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
            if(!golf) { _fun38159_ip = 163; continue _fun38159 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun38159_ip = 179; continue _fun38159 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun38159_ip = 249; continue _fun38159 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun38159_ip = 249; continue _fun38159 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun38159_ip = 234; continue _fun38159 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun38159_ip = 247; continue _fun38159 }
 234:
            verify = _closure1_slot4;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun38159_ip = 265; continue _fun38159;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun38159_ip = 283; continue _fun38159;
 270:
            golf = _closure1_slot4;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun38159_ip = 323; continue _fun38159 }
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
            if(!tango) { _fun38159_ip = 330; continue _fun38159 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun38160: for(var _fun38160_ip = 0; ; ) switch(_fun38160_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun38160_ip = 56; continue _fun38160 }
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
                    _fun38160_ip = 67; continue _fun38160;
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
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun38161: for(var _fun38161_ip = 0; ; ) switch(_fun38161_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun38161_ip = 23; continue _fun38161 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun38161_ip = 33; continue _fun38161 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun38161_ip = 70; continue _fun38161 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun38161_ip = 55; continue _fun38161 }
 70:
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    tango = function(argFoo) { // Original name: deserializeChannels
        _fun38162: for(var _fun38162_ip = 0; ; ) switch(_fun38162_ip) {
 0:
            zulu = _closure1_slot3;
            entity = undefined;
            mike = argFoo;
            oscar = zulu.bind(entity)(mike);
            zulu = oscar.bind(entity)();
            mike = zulu.done;
            report = 1;
            tango = null;
            if(mike) { _fun38162_ip = 168; continue _fun38162 }
 37:
            mike = zulu.value;
            romeo = mike.permissionOverwrites_;
            if(!(tango != romeo)) { _fun38162_ip = 153; continue _fun38162 }
 52:
            offset = romeo;
            for(mike in offset)
 63:
            {
 72:
                foxtrot = mike;
                backup = romeo[foxtrot];
                kilo = _closure1_slot0;
                foxtrot = _closure1_slot1;
                sizing = foxtrot[report];
                result = kilo.bind(entity)(sizing);
                output = result.deserialize;
                sizing = backup.allow;
                sizing = output.bind(result)(sizing);
                backup['allow'] = sizing;
                foxtrot = foxtrot[report];
                sizing = kilo.bind(entity)(foxtrot);
                kilo = sizing.deserialize;
                foxtrot = backup.deny;
                foxtrot = kilo.bind(sizing)(foxtrot);
                backup['deny'] = foxtrot;
                _fun38162_ip = 63; continue _fun38162;
            }
 153:
            options = oscar.bind(entity)();
            mike = options.done;
            zulu = options;
            if(!mike) { _fun38162_ip = 37; continue _fun38162 }
 168:
            return entity;
        }
    };
    var _closure1_slot5 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, report);
    entity = 0;
    golf = oscar[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(golf);
    var _closure1_slot2 = report;
    report = 2;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'modules/cache/deserializeChannels.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    tango = function(argFoo) { // Original name: deserializeChannelEntries
        _fun38163: for(var _fun38163_ip = 0; ; ) switch(_fun38163_ip) {
 0:
            zulu = _closure1_slot3;
            entity = undefined;
            mike = argFoo;
            golf = zulu.bind(entity)(mike);
            zulu = golf.bind(entity)();
            mike = zulu.done;
            oscar = 2;
            report = 0;
            tango = 1;
            if(mike) { _fun38163_ip = 84; continue _fun38163 }
 37:
            verify = zulu.value;
            mike = _closure1_slot2;
            mike = mike.bind(entity)(verify, oscar);
            verify = mike[report];
            verify = _closure1_slot5;
            mike = mike[tango];
            mike = verify.bind(entity)(mike);
            verify = golf.bind(entity)();
            mike = verify.done;
            zulu = verify;
            if(!mike) { _fun38163_ip = 37; continue _fun38163 }
 84:
            return entity;
        }
    };
    zulu['deserializeChannelEntries'] = tango;
    mike = function(argFoo) { // Original name: deserializeChannel
        _fun38164: for(var _fun38164_ip = 0; ; ) switch(_fun38164_ip) {
 0:
            entity = argFoo;
            offset = entity.permissionOverwrites_;
            mike = null;
            if(!(mike != offset)) { _fun38164_ip = 124; continue _fun38164 }
 15:
            options = offset;
            zulu = 1;
            mike = undefined;
            for(report in options)
 34:
            {
 43:
                yankee = report;
                romeo = offset[yankee];
                foxtrot = _closure1_slot0;
                yankee = _closure1_slot1;
                backup = yankee[zulu];
                sizing = foxtrot.bind(mike)(backup);
                kilo = sizing.deserialize;
                backup = romeo.allow;
                backup = kilo.bind(sizing)(backup);
                romeo['allow'] = backup;
                yankee = yankee[zulu];
                backup = foxtrot.bind(mike)(yankee);
                foxtrot = backup.deserialize;
                yankee = romeo.deny;
                yankee = foxtrot.bind(backup)(yankee);
                romeo['deny'] = yankee;
                _fun38164_ip = 34; continue _fun38164;
            }
 124:
            return entity;
        }
    };
    zulu['deserializeChannel'] = mike;
    return entity;
})();