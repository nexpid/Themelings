// app/modules/impersonate/ImpersonateActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = options;
    report = function(argFoo, argBar) { // Original name: updateImpersonating
        _fun61381: for(var _fun61381_ip = 0; ; ) switch(_fun61381_ip) {
 0:
            zulu = argFoo;
            options = argBar;
            tango = _closure1_slot10;
            mike = tango.getData;
            verify = mike.bind(tango)(zulu);
            mike = null;
            mike = mike != verify;
            if(!mike) { _fun61381_ip = 47; continue _fun61381 }
 33:
            report = verify.type;
            tango = options.type;
            mike = report === tango;
 47:
            if(!mike) { _fun61381_ip = 281; continue _fun61381 }
 53:
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 10;
            tango = oscar[mike];
            mike = undefined;
            yankee = report.bind(mike)(tango);
            offset = yankee.track;
            tango = _closure1_slot13;
            golf = tango.VIEW_AS_ROLES_SELECTED;
            tango = {};
            romeo = global;
            backup = romeo.Object;
            foxtrot = backup.keys;
            romeo = verify.roles;
            romeo = foxtrot.bind(backup)(romeo);
            romeo = romeo.length;
            tango['num_roles'] = romeo;
            backup = _closure1_slot0;
            romeo = 11;
            romeo = oscar[romeo];
            foxtrot = backup.bind(mike)(romeo);
            romeo = foxtrot.collectGuildAnalyticsMetadata;
            kilo = romeo.bind(foxtrot)(zulu);
            sizing = tango;
            romeo = copyDataProperties(sizing, kilo);
            foxtrot = verify.type;
            romeo = 12;
            romeo = oscar[romeo];
            romeo = backup.bind(mike)(romeo);
            romeo = romeo.ImpersonateType;
            romeo = romeo.NEW_MEMBER;
            foxtrot = foxtrot === romeo;
            romeo = 'is_viewing_as_member';
            tango[romeo] = foxtrot;
            tango = offset.bind(yankee)(golf, tango);
            tango = 13;
            tango = oscar[tango];
            oscar = report.bind(mike)(tango);
            report = oscar.dispatch;
            tango = {};
            golf = 'IMPERSONATE_UPDATE';
            tango['type'] = golf;
            tango['guildId'] = zulu;
            golf = {};
            sizing = golf;
            kilo = verify;
            verify = copyDataProperties(sizing, kilo);
            sizing = golf;
            kilo = options;
            options = copyDataProperties(sizing, kilo);
            tango['data'] = golf;
            tango = report.bind(oscar)(tango);
            entity = _closure1_slot16;
            entity = entity.bind(mike)(zulu);
 281:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot15 = report;
    entity = function(argFoo) { // Original name: puntFromSelectedChannelIfInaccessible
        _fun61382: for(var _fun61382_ip = 0; ; ) switch(_fun61382_ip) {
 0:
            oscar = argFoo;
            mike = _closure1_slot8;
            entity = mike.getChannelId;
            report = entity.bind(mike)(oscar);
            mike = _closure1_slot3;
            entity = mike.getChannel;
            golf = entity.bind(mike)(report);
            mike = null;
            if(!(mike != report)) { _fun61382_ip = 55; continue _fun61382 }
 41:
            zulu = _closure1_slot14;
            entity = undefined;
            entity = zulu.bind(entity)(report);
            if(entity) { _fun61382_ip = 157; continue _fun61382 }
 55:
            report = _closure1_slot7;
            zulu = report.can;
            entity = _closure1_slot11;
            entity = entity.VIEW_CHANNEL;
            entity = zulu.bind(report)(entity, golf);
            if(entity) { _fun61382_ip = 157; continue _fun61382 }
 84:
            zulu = _closure1_slot4;
            entity = zulu.getDefaultChannel;
            entity = entity.bind(zulu)(oscar);
            if(!(mike != entity)) { _fun61382_ip = 157; continue _fun61382 }
 103:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 14;
            zulu = zulu[mike];
            mike = undefined;
            zulu = report.bind(mike)(zulu);
            mike = zulu.transitionTo;
            report = _closure1_slot12;
            tango = report.CHANNEL;
            entity = entity.id;
            entity = tango.bind(report)(oscar, entity);
            entity = mike.bind(zulu)(entity);
 157:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    tango = function(argFoo, argBar, argBaz) { // Original name: updateImpersonatedChannels
        tango = argFoo;
        options = argBar;
        oscar = argBaz;
        entity = global;
        golf = entity.Set;
        report = _closure1_slot9;
        zulu = report.getOptedInChannels;
        offset = zulu.bind(report)(tango);
        report = golf.prototype;
        report = Object.create(report, {constructor: {value: golf}});
        yankee = report;
        zulu = new yankee[golf](offset, verify);
        report = zulu instanceof Object ? zulu : report;
        var _closure2_slot0 = report;
        golf = options.forEach;
        zulu = function(argFoo) {
            zulu = _closure2_slot0;
            mike = zulu.add;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        zulu = golf.bind(options)(zulu);
        zulu = oscar.forEach;
        mike = function(argFoo) {
            zulu = _closure2_slot0;
            mike = zulu.delete;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = zulu.bind(oscar)(mike);
        zulu = _closure1_slot15;
        mike = {};
        golf = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 12;
        oscar = oscar[entity];
        entity = undefined;
        oscar = golf.bind(entity)(oscar);
        oscar = oscar.ImpersonateType;
        oscar = oscar.NEW_MEMBER;
        mike['type'] = oscar;
        mike['optInChannels'] = report;
        mike = zulu.bind(entity)(tango, mike);
        return entity;
    };
    var _closure1_slot17 = tango;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 1;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = 3;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot6 = oscar;
    oscar = 4;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot7 = oscar;
    oscar = 5;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot8 = oscar;
    oscar = 6;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot9 = oscar;
    oscar = 7;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot10 = oscar;
    oscar = 8;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    verify = oscar.Permissions;
    var _closure1_slot11 = verify;
    verify = oscar.Routes;
    var _closure1_slot12 = verify;
    oscar = oscar.AnalyticEvents;
    var _closure1_slot13 = oscar;
    oscar = 9;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.isStaticChannelRoute;
    var _closure1_slot14 = oscar;
    oscar = 15;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/impersonate/ImpersonateActionCreators.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = function(argFoo, argBar) { // Original name: startImpersonating
        zulu = argFoo;
        golf = argBar;
        report = _closure1_slot1;
        oscar = _closure1_slot2;
        entity = 10;
        tango = oscar[entity];
        entity = undefined;
        offset = report.bind(entity)(tango);
        verify = offset.track;
        tango = _closure1_slot13;
        options = tango.VIEW_AS_ROLES_SELECTED;
        tango = {};
        yankee = global;
        foxtrot = yankee.Object;
        romeo = foxtrot.keys;
        yankee = golf.roles;
        yankee = romeo.bind(foxtrot)(yankee);
        yankee = yankee.length;
        tango['num_roles'] = yankee;
        foxtrot = _closure1_slot0;
        yankee = 11;
        yankee = oscar[yankee];
        romeo = foxtrot.bind(entity)(yankee);
        yankee = romeo.collectGuildAnalyticsMetadata;
        backup = yankee.bind(romeo)(zulu);
        kilo = tango;
        yankee = copyDataProperties(kilo, backup);
        romeo = golf.type;
        yankee = 12;
        yankee = oscar[yankee];
        yankee = foxtrot.bind(entity)(yankee);
        yankee = yankee.ImpersonateType;
        yankee = yankee.NEW_MEMBER;
        romeo = romeo === yankee;
        yankee = 'is_viewing_as_member';
        tango[yankee] = romeo;
        tango = verify.bind(offset)(options, tango);
        tango = 13;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.dispatch;
        tango = {};
        options = 'IMPERSONATE_UPDATE';
        tango['type'] = options;
        tango['guildId'] = zulu;
        tango['data'] = golf;
        tango = report.bind(oscar)(tango);
        mike = _closure1_slot16;
        mike = mike.bind(entity)(zulu);
        return entity;
    };
    zulu['startImpersonating'] = oscar;
    zulu['updateImpersonating'] = report;
    report = function(argFoo) { // Original name: stopImpersonating
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 13;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'IMPERSONATE_STOP';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['stopImpersonating'] = report;
    zulu['updateImpersonatedChannels'] = tango;
    tango = function(argFoo, argBar) { // Original name: updateImpersonatedRoles
        tango = argFoo;
        golf = argBar;
        zulu = _closure1_slot6;
        entity = zulu.getRoles;
        entity = entity.bind(zulu)(tango);
        var _closure2_slot0 = entity;
        zulu = function(argFoo, argBar) { // Original name: optIntoPrivateChannelsForGrantedRolesForPreview
            golf = argFoo;
            var _closure3_slot0 = golf;
            tango = _closure1_slot4;
            zulu = tango.getSelectableChannelIds;
            verify = zulu.bind(tango)(golf);
            zulu = new Array(0);
            options = 0;
            offset = zulu;
            options = arraySpread(offset, verify, options);
            oscar = _closure1_slot4;
            tango = oscar.getVocalChannelIds;
            verify = tango.bind(oscar)(golf);
            offset = zulu;
            tango = arraySpread(offset, verify, options);
            var _closure3_slot1 = zulu;
            zulu = global;
            report = zulu.Array;
            tango = report.from;
            zulu = argBar;
            zulu = tango.bind(report)(zulu);
            var _closure3_slot2 = zulu;
            zulu = _closure1_slot4;
            mike = zulu.addConditionalChangeListener;
            entity = function() {
                _fun61390: for(var _fun61390_ip = 0; ; ) switch(_fun61390_ip) {
 0:
                    oscar = _closure1_slot5;
                    report = oscar.getSelfMember;
                    tango = _closure3_slot0;
                    report = report.bind(oscar)(tango);
                    var _closure4_slot0 = report;
                    tango = null;
                    if(!(tango != report)) { _fun61390_ip = 172; continue _fun61390 }
 40:
                    oscar = _closure3_slot2;
                    report = oscar.some;
                    tango = function(argFoo) {
                        entity = _closure4_slot0;
                        zulu = entity.roles;
                        mike = zulu.includes;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        entity = !entity;
                        return entity;
                    };
                    tango = report.bind(oscar)(tango);
                    if(tango) { _fun61390_ip = 168; continue _fun61390 }
 63:
                    report = _closure1_slot4;
                    tango = report.getSelectableChannelIds;
                    verify = _closure3_slot0;
                    yankee = tango.bind(report)(verify);
                    oscar = new Array(0);
                    tango = 0;
                    romeo = oscar;
                    offset = 0;
                    offset = arraySpread(romeo, yankee, offset);
                    options = _closure1_slot4;
                    report = options.getVocalChannelIds;
                    yankee = report.bind(options)(verify);
                    romeo = oscar;
                    report = arraySpread(romeo, yankee, offset);
                    report = oscar.filter;
                    zulu = function(argFoo) {
                        zulu = _closure3_slot1;
                        mike = zulu.includes;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        entity = !entity;
                        return entity;
                    };
                    report = report.bind(oscar)(zulu);
                    zulu = report.length;
                    if(!(zulu > tango)) { _fun61390_ip = 164; continue _fun61390 }
 143:
                    tango = _closure1_slot17;
                    zulu = _closure3_slot0;
                    mike = undefined;
                    entity = new Array(0);
                    entity = tango.bind(mike)(zulu, report, entity);
 164:
                    entity = false;
                    return entity;
 168:
                    entity = true;
                    return entity;
 172:
                    entity = false;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity = undefined;
        zulu = zulu.bind(entity)(tango, golf);
        report = {};
        var _closure2_slot1 = report;
        zulu = golf.forEach;
        mike = function(argFoo) {
            zulu = argFoo;
            mike = _closure2_slot1;
            entity = _closure2_slot0;
            entity = entity[zulu];
            mike[zulu] = entity;
            return entity;
        };
        mike = zulu.bind(golf)(mike);
        zulu = _closure1_slot15;
        mike = {};
        golf = _closure1_slot0;
        options = _closure1_slot2;
        oscar = 12;
        oscar = options[oscar];
        oscar = golf.bind(entity)(oscar);
        oscar = oscar.ImpersonateType;
        oscar = oscar.NEW_MEMBER;
        mike['type'] = oscar;
        mike['roles'] = report;
        mike = zulu.bind(entity)(tango, mike);
        return entity;
    };
    zulu['updateImpersonatedRoles'] = tango;
    mike = function(argFoo, argBar) { // Original name: updateImpersonatedData
        tango = _closure1_slot15;
        zulu = {};
        report = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 12;
        mike = mike[entity];
        entity = undefined;
        mike = report.bind(entity)(mike);
        mike = mike.ImpersonateType;
        mike = mike.NEW_MEMBER;
        zulu['type'] = mike;
        oscar = argBar;
        golf = zulu;
        mike = copyDataProperties(golf, oscar);
        mike = argFoo;
        mike = tango.bind(entity)(mike, zulu);
        return entity;
    };
    zulu['updateImpersonatedData'] = mike;
    return entity;
})();