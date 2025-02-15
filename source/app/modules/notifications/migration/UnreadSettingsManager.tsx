// app/modules/notifications/migration/UnreadSettingsManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun124587: for(var _fun124587_ip = 0; ; ) switch(_fun124587_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun124587_ip = 46; continue _fun124587 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun124587_ip = 55; continue _fun124587 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun124587_ip = 345; continue _fun124587 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun124587_ip = 323; continue _fun124587 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun124587_ip = 283; continue _fun124587 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun124587_ip = 270; continue _fun124587 }
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
            if(!golf) { _fun124587_ip = 163; continue _fun124587 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun124587_ip = 179; continue _fun124587 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun124587_ip = 249; continue _fun124587 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun124587_ip = 249; continue _fun124587 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun124587_ip = 234; continue _fun124587 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun124587_ip = 247; continue _fun124587 }
 234:
            verify = _closure1_slot16;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun124587_ip = 265; continue _fun124587;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun124587_ip = 283; continue _fun124587;
 270:
            golf = _closure1_slot16;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun124587_ip = 323; continue _fun124587 }
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
            if(!tango) { _fun124587_ip = 330; continue _fun124587 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun124588: for(var _fun124588_ip = 0; ; ) switch(_fun124588_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun124588_ip = 56; continue _fun124588 }
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
                    _fun124588_ip = 67; continue _fun124588;
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
    var _closure1_slot15 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun124589: for(var _fun124589_ip = 0; ; ) switch(_fun124589_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun124589_ip = 23; continue _fun124589 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun124589_ip = 33; continue _fun124589 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun124589_ip = 70; continue _fun124589 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun124589_ip = 55; continue _fun124589 }
 70:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun124590: for(var _fun124590_ip = 0; ; ) switch(_fun124590_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot18;
            entity = entity.bind(zulu)();
            if(entity) { _fun124590_ip = 51; continue _fun124590 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun124590_ip = 92; continue _fun124590;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun124590_ip = 71; continue _fun124590 }
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
    var _closure1_slot17 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun124591: for(var _fun124591_ip = 0; ; ) switch(_fun124591_ip) {
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
            _fun124591_ip = 76; continue _fun124591;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot18 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot18 = entity;
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
    options = 1;
    tango = oscar[options];
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
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.ChannelTypes;
    var _closure1_slot11 = verify;
    tango = tango.UserNotificationSettings;
    var _closure1_slot12 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelNotificationSettingsFlags;
    var _closure1_slot13 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.Millis;
    tango = tango.DAY;
    tango = options * tango;
    var _closure1_slot14 = tango;
    tango = 15;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: UnreadSettingsManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            mike = _closure1_slot3;
            report = _closure2_slot0;
            tango = undefined;
            mike = mike.bind(tango)(oscar, report);
            mike = _closure1_slot17;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = mike.bind(tango)(oscar, report, entity);
            var _closure3_slot0 = entity;
            mike = {};
            tango = function() { // Original name: GUILD_CREATE
                mike = _closure3_slot0;
                entity = mike.checkGuilds;
                entity = entity.bind(mike)();
                return entity;
            };
            mike['GUILD_CREATE'] = tango;
            zulu = function() { // Original name: POST_CONNECTION_OPEN
                mike = _closure3_slot0;
                entity = mike.checkGuilds;
                entity = entity.bind(mike)();
                return entity;
            };
            mike['POST_CONNECTION_OPEN'] = zulu;
            entity['actions'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        oscar = _closure1_slot7;
        zulu = undefined;
        report = argFoo;
        report = oscar.bind(zulu)(tango, report);
        mike = _closure1_slot4;
        report = {};
        oscar = 'checkGuilds';
        report['key'] = oscar;
        entity = function() { // Original name: value
            _fun124598: for(var _fun124598_ip = 0; ; ) switch(_fun124598_ip) {
 0:
                mike = _closure1_slot10;
                mike = mike.useNewNotifications;
                if(!mike) { _fun124598_ip = 67; continue _fun124598 }
 16:
                mike = global;
                zulu = mike.Object;
                mike = zulu.values;
                tango = _closure1_slot9;
                entity = tango.getGuilds;
                entity = entity.bind(tango)();
                zulu = mike.bind(zulu)(entity);
                mike = zulu.forEach;
                entity = function(argFoo) {
                    _fun124599: for(var _fun124599_ip = 0; ; ) switch(_fun124599_ip) {
 0:
                        zulu = argFoo;
                        entity = zulu.joinedAt;
                        offset = null;
                        if(!(offset != entity)) { _fun124599_ip = 546; continue _fun124599 }
 18:
                        tango = global;
                        mike = tango.Date;
                        entity = mike.now;
                        mike = entity.bind(mike)();
                        report = zulu.joinedAt;
                        entity = report.getTime;
                        entity = entity.bind(report)();
                        report = mike - entity;
                        entity = _closure1_slot14;
                        if(!(!(report > entity))) { _fun124599_ip = 546; continue _fun124599 }
 69:
                        oscar = _closure1_slot10;
                        report = oscar.getMessageNotifications;
                        entity = zulu.id;
                        report = report.bind(oscar)(entity);
                        entity = _closure1_slot12;
                        entity = entity.ALL_MESSAGES;
                        if(!(report !== entity)) { _fun124599_ip = 546; continue _fun124599 }
 106:
                        oscar = tango.Object;
                        report = oscar.values;
                        options = _closure1_slot10;
                        golf = options.getChannelOverrides;
                        entity = zulu.id;
                        entity = golf.bind(options)(entity);
                        verify = report.bind(oscar)(entity);
                        entity = verify.length;
                        oscar = 0;
                        report = oscar < entity;
                        options = 11;
                        entity = undefined;
                        golf = 0;
                        if(!report) { _fun124599_ip = 281; continue _fun124599 }
 163:
                        report = verify[golf];
                        yankee = report.message_notifications;
                        if(!(offset != yankee)) { _fun124599_ip = 200; continue _fun124599 }
 177:
                        romeo = report.message_notifications;
                        yankee = _closure1_slot12;
                        yankee = yankee.NULL;
                        if(!(romeo === yankee)) { _fun124599_ip = 544; continue _fun124599 }
 200:
                        yankee = report.flags;
                        if(!(offset != yankee)) { _fun124599_ip = 269; continue _fun124599 }
 209:
                        romeo = _closure1_slot0;
                        yankee = _closure1_slot2;
                        yankee = yankee[options];
                        foxtrot = romeo.bind(entity)(yankee);
                        romeo = foxtrot.hasAnyFlag;
                        yankee = report.flags;
                        report = _closure1_slot13;
                        backup = report.UNREADS_ALL_MESSAGES;
                        report = report.UNREADS_ONLY_MENTIONS;
                        report = backup | report;
                        report = romeo.bind(foxtrot)(yankee, report);
                        if(report) { _fun124599_ip = 542; continue _fun124599 }
 269:
                        golf = golf + 1;
                        report = verify.length;
                        if(golf < report) { _fun124599_ip = 163; continue _fun124599 }
 281:
                        golf = tango.Object;
                        report = golf.values;
                        verify = _closure1_slot8;
                        options = verify.getMutableBasicGuildChannelsForGuild;
                        tango = zulu.id;
                        tango = options.bind(verify)(tango);
                        golf = report.bind(golf)(tango);
                        report = golf.filter;
                        tango = function(argFoo) {
                            entity = argFoo;
                            mike = entity.type;
                            entity = _closure1_slot11;
                            entity = entity.GUILD_ANNOUNCEMENT;
                            entity = mike === entity;
                            return entity;
                        };
                        report = report.bind(golf)(tango);
                        tango = report.length;
                        if(!(oscar !== tango)) { _fun124599_ip = 546; continue _fun124599 }
 348:
                        oscar = {};
                        tango = _closure1_slot15;
                        options = tango.bind(entity)(report);
                        report = options.bind(entity)();
                        tango = report.done;
                        golf = 12;
                        if(tango) { _fun124599_ip = 474; continue _fun124599 }
 374:
                        offset = report.value;
                        verify = offset.id;
                        tango = {};
                        romeo = _closure1_slot0;
                        yankee = _closure1_slot2;
                        yankee = yankee[golf];
                        foxtrot = romeo.bind(entity)(yankee);
                        romeo = foxtrot.withChannelUnreadFlags;
                        kilo = _closure1_slot10;
                        backup = kilo.getChannelIdFlags;
                        yankee = zulu.id;
                        offset = offset.id;
                        yankee = backup.bind(kilo)(yankee, offset);
                        offset = _closure1_slot13;
                        offset = offset.UNREADS_ALL_MESSAGES;
                        offset = romeo.bind(foxtrot)(yankee, offset);
                        tango['flags'] = offset;
                        oscar[verify] = tango;
                        verify = options.bind(entity)();
                        tango = verify.done;
                        report = verify;
                        if(!tango) { _fun124599_ip = 374; continue _fun124599 }
 474:
                        report = _closure1_slot1;
                        options = _closure1_slot2;
                        tango = 13;
                        tango = options[tango];
                        report = report.bind(entity)(tango);
                        tango = report.updateChannelOverrideSettingsBulk;
                        zulu = zulu.id;
                        golf = _closure1_slot0;
                        mike = 14;
                        mike = options[mike];
                        mike = golf.bind(entity)(mike);
                        mike = mike.NotificationLabels;
                        mike = mike.AnnouncementAutoEnable;
                        mike = tango.bind(report)(zulu, oscar, mike);
                        _fun124599_ip = 546; continue _fun124599;
 542:
                        return entity;
 544:
                        return entity;
 546:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
 67:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 16;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/notifications/migration/UnreadSettingsManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();