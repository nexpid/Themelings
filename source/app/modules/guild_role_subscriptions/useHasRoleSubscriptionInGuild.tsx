// app/modules/guild_role_subscriptions/useHasRoleSubscriptionInGuild.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
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
            if(mike) { _fun00002_ip = 343; continue _fun00001 }
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
            verify = _closure1_slot7;
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
            golf = _closure1_slot7;
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
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
    var _closure1_slot7 = entity;
    mike = function(argFoo, argBar) { // Original name: computeHasRoleSubscriptionsInGuild
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argFoo;
            golf = argBar;
            entity = arguments[2];
            report = arguments[3];
            oscar = undefined;
            if(!(entity === oscar)) { _fun00008_ip = 63; continue _fun00007 }
 18:
            mike = null;
            zulu = mike == tango;
            if(zulu) { _fun00008_ip = 60; continue _fun00007 }
 27:
            verify = _closure1_slot3;
            options = verify.getMember;
            offset = _closure1_slot2;
            zulu = offset.getId;
            zulu = zulu.bind(offset)();
            mike = options.bind(verify)(tango, zulu);
 60:
            entity = mike;
 63:
            if(!(report === oscar)) { _fun00008_ip = 85; continue _fun00007 }
 67:
            zulu = _closure1_slot4;
            mike = new Array(1);
            mike[0] = zulu;
            report = mike;
 85:
            zulu = report;
            mike = zulu[Symbol.iterator];
            zulu = mike().next;
            options = zulu().value;
            zulu = mike;
            report = zulu === oscar;
            zulu = undefined;
            if(report) { _fun00008_ip = 110; continue _fun00007 }
 107:
            zulu = options;
 110:
            if(report) { _fun00008_ip = 116; continue _fun00007 }
 113:
            mike.return();
 116:
            mike = zulu.getGuild;
            options = mike.bind(zulu)(tango);
            report = null;
            if(!(report != options)) { _fun00008_ip = 284; continue _fun00007 }
 135:
            if(!(report != entity)) { _fun00008_ip = 284; continue _fun00007 }
 142:
            tango = options.hasFeature;
            zulu = _closure1_slot5;
            zulu = zulu.ROLE_SUBSCRIPTIONS_ENABLED;
            zulu = tango.bind(options)(zulu);
            if(!zulu) { _fun00008_ip = 284; continue _fun00007 }
 169:
            mike = _closure1_slot6;
            entity = entity.roles;
            tango = mike.bind(oscar)(entity);
            mike = tango.bind(oscar)();
            entity = mike.done;
            zulu = mike;
            mike = undefined;
            if(entity) { _fun00008_ip = 280; continue _fun00007 }
 201:
            entity = zulu.value;
            verify = report == golf;
            options = undefined;
            if(verify) { _fun00008_ip = 219; continue _fun00007 }
 215:
            options = golf[entity];
 219:
            verify = report == options;
            entity = undefined;
            if(verify) { _fun00008_ip = 255; continue _fun00007 }
 228:
            verify = options.tags;
            options = report == verify;
            mike = verify;
            entity = undefined;
            if(options) { _fun00008_ip = 255; continue _fun00007 }
 246:
            entity = verify.subscription_listing_id;
            mike = verify;
 255:
            if(!(report == entity)) { _fun00008_ip = 276; continue _fun00007 }
 259:
            options = tango.bind(oscar)();
            entity = options.done;
            zulu = options;
            if(entity) { _fun00008_ip = 280; continue _fun00007 }
 274:
            _fun00008_ip = 201; continue _fun00007;
 276:
            entity = true;
            return entity;
 280:
            entity = false;
            return entity;
 284:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot8 = mike;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.GuildFeatures;
    var _closure1_slot5 = report;
    report = 5;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_role_subscriptions/useHasRoleSubscriptionInGuild.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: useHasRoleSubscriptionInGuild
        golf = argFoo;
        var _closure2_slot0 = golf;
        report = _closure1_slot0;
        options = _closure1_slot1;
        zulu = 4;
        oscar = options[zulu];
        tango = undefined;
        yankee = report.bind(tango)(oscar);
        offset = yankee.useStateFromStores;
        oscar = _closure1_slot2;
        verify = new Array(2);
        verify[0] = oscar;
        oscar = _closure1_slot3;
        verify[1] = oscar;
        oscar = function() {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                mike = _closure2_slot0;
                entity = null;
                mike = entity == mike;
                if(mike) { _fun00010_ip = 53; continue _fun00009 }
 16:
                report = _closure1_slot3;
                tango = report.getMember;
                zulu = _closure2_slot0;
                oscar = _closure1_slot2;
                mike = oscar.getId;
                mike = mike.bind(oscar)();
                entity = tango.bind(report)(zulu, mike);
 53:
                return entity;
            }
        };
        oscar = offset.bind(yankee)(verify, oscar);
        var _closure2_slot1 = oscar;
        zulu = options[zulu];
        report = report.bind(tango)(zulu);
        tango = report.useStateFromStores;
        mike = _closure1_slot4;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(2);
        mike[0] = golf;
        mike[1] = oscar;
        entity = function() {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                oscar = _closure1_slot8;
                report = _closure2_slot0;
                zulu = null;
                golf = zulu != report;
                zulu = undefined;
                if(!golf) { _fun00012_ip = 44; continue _fun00011 }
 25:
                verify = _closure1_slot4;
                options = verify.getRoles;
                golf = _closure2_slot0;
                zulu = options.bind(verify)(golf);
 44:
                yankee = _closure2_slot1;
                golf = _closure1_slot4;
                entity = new Array(1);
                entity[0] = golf;
                backup = undefined;
                foxtrot = report;
                romeo = zulu;
                offset = entity;
                entity = backup[oscar](foxtrot, romeo, yankee, offset, verify);
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['default'] = tango;
    zulu['computeHasRoleSubscriptionsInGuild'] = mike;
    return entity;
})();