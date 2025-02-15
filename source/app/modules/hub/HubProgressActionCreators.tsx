// app/modules/hub/HubProgressActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun79321: for(var _fun79321_ip = 0; ; ) switch(_fun79321_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun79321_ip = 46; continue _fun79321 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun79321_ip = 55; continue _fun79321 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun79321_ip = 345; continue _fun79321 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun79321_ip = 323; continue _fun79321 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun79321_ip = 283; continue _fun79321 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun79321_ip = 270; continue _fun79321 }
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
            if(!golf) { _fun79321_ip = 163; continue _fun79321 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun79321_ip = 179; continue _fun79321 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun79321_ip = 249; continue _fun79321 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun79321_ip = 249; continue _fun79321 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun79321_ip = 234; continue _fun79321 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun79321_ip = 247; continue _fun79321 }
 234:
            verify = _closure1_slot6;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun79321_ip = 265; continue _fun79321;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun79321_ip = 283; continue _fun79321;
 270:
            golf = _closure1_slot6;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun79321_ip = 323; continue _fun79321 }
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
            if(!tango) { _fun79321_ip = 330; continue _fun79321 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun79322: for(var _fun79322_ip = 0; ; ) switch(_fun79322_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun79322_ip = 56; continue _fun79322 }
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
                    _fun79322_ip = 67; continue _fun79322;
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
        _fun79323: for(var _fun79323_ip = 0; ; ) switch(_fun79323_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun79323_ip = 23; continue _fun79323 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun79323_ip = 33; continue _fun79323 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun79323_ip = 70; continue _fun79323 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun79323_ip = 55; continue _fun79323 }
 70:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo, argBar) { // Original name: changeHubProgressUserSetting
        entity = argBar;
        var _closure2_slot0 = entity;
        tango = _closure1_slot0;
        golf = _closure1_slot1;
        zulu = 3;
        report = golf[zulu];
        entity = undefined;
        oscar = tango.bind(entity)(report);
        report = oscar.updateUserGuildSettings;
        zulu = golf[zulu];
        zulu = tango.bind(entity)(zulu);
        zulu = zulu.UserSettingsDelay;
        tango = zulu.INFREQUENT_USER_ACTION;
        zulu = argFoo;
        mike = function(argFoo) {
            _fun79325: for(var _fun79325_ip = 0; ; ) switch(_fun79325_ip) {
 0:
                offset = argFoo;
                mike = _closure1_slot5;
                entity = _closure2_slot0;
                options = undefined;
                golf = mike.bind(options)(entity);
                zulu = golf.bind(options)();
                mike = zulu.done;
                oscar = 4;
                tango = zulu;
                zulu = false;
                entity = false;
                if(mike) { _fun79325_ip = 150; continue _fun79325 }
 46:
                foxtrot = tango.value;
                yankee = _closure1_slot0;
                mike = _closure1_slot1;
                mike = mike[oscar];
                romeo = yankee.bind(options)(mike);
                yankee = romeo.hasFlag;
                mike = offset.hubProgress;
                mike = yankee.bind(romeo)(mike, foxtrot);
                if(mike) { _fun79325_ip = 132; continue _fun79325 }
 89:
                yankee = _closure1_slot0;
                mike = _closure1_slot1;
                mike = mike[oscar];
                romeo = yankee.bind(options)(mike);
                yankee = romeo.addFlag;
                mike = offset.hubProgress;
                mike = yankee.bind(romeo)(mike, foxtrot);
                offset['hubProgress'] = mike;
                zulu = true;
 132:
                romeo = golf.bind(options)();
                mike = romeo.done;
                tango = romeo;
                entity = zulu;
                if(!mike) { _fun79325_ip = 46; continue _fun79325 }
 150:
                return entity;
            }
        };
        mike = report.bind(oscar)(zulu, mike, tango);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.HUB_PROGRESS_STEP_ORDER;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildFeatures;
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/hub/HubProgressActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: setHubProgressActionComplete
        _fun79326: for(var _fun79326_ip = 0; ; ) switch(_fun79326_ip) {
 0:
            tango = argFoo;
            mike = null;
            if(!(mike != tango)) { _fun79326_ip = 80; continue _fun79326 }
 9:
            report = _closure1_slot2;
            zulu = report.getGuild;
            oscar = zulu.bind(report)(tango);
            mike = mike != oscar;
            if(!mike) { _fun79326_ip = 54; continue _fun79326 }
 33:
            report = oscar.hasFeature;
            zulu = _closure1_slot4;
            zulu = zulu.HUB;
            mike = report.bind(oscar)(zulu);
 54:
            if(!mike) { _fun79326_ip = 80; continue _fun79326 }
 57:
            zulu = _closure1_slot7;
            mike = new Array(1);
            entity = argBar;
            mike[0] = entity;
            entity = undefined;
            entity = zulu.bind(entity)(tango, mike);
 80:
            entity = undefined;
            return entity;
        }
    };
    zulu['setHubProgressActionComplete'] = tango;
    mike = function(argFoo) { // Original name: skipHubProgress
        tango = _closure1_slot7;
        zulu = _closure1_slot3;
        entity = undefined;
        mike = argFoo;
        mike = tango.bind(entity)(mike, zulu);
        return entity;
    };
    zulu['skipHubProgress'] = mike;
    return entity;
})();