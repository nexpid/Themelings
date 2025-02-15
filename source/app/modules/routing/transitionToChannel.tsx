// app/modules/routing/transitionToChannel.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = options;
    report = function(argFoo, argBar) { // Original name: transitionToChannel
        _fun53306: for(var _fun53306_ip = 0; ; ) switch(_fun53306_ip) {
 0:
            oscar = argBar;
            tango = _closure1_slot3;
            zulu = tango.getChannel;
            entity = argFoo;
            entity = zulu.bind(tango)(entity);
            zulu = null;
            if(!(zulu != entity)) { _fun53306_ip = 233; continue _fun53306 }
 32:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            tango = 2;
            tango = options[tango];
            report = undefined;
            verify = golf.bind(report)(tango);
            tango = verify.getGuildIdForGenericRedirect;
            yankee = tango.bind(verify)(entity);
            verify = _closure1_slot1;
            tango = 3;
            tango = options[tango];
            romeo = verify.bind(report)(tango);
            offset = romeo.preload;
            verify = entity.guild_id;
            tango = entity.id;
            tango = offset.bind(romeo)(verify, tango);
            tango = 4;
            tango = options[tango];
            offset = golf.bind(report)(tango);
            verify = offset.transitionTo;
            options = _closure1_slot4;
            golf = options.CHANNEL;
            tango = entity.id;
            options = golf.bind(options)(yankee, tango);
            golf = {};
            tango = true;
            golf['openChannel'] = tango;
            backup = golf;
            foxtrot = oscar;
            yankee = copyDataProperties(backup, foxtrot);
            golf = verify.bind(offset)(options, golf);
            zulu = zulu != oscar;
            if(!zulu) { _fun53306_ip = 180; continue _fun53306 }
 174:
            zulu = oscar.openTextInVoiceIfVoiceChannel;
 180:
            if(!zulu) { _fun53306_ip = 193; continue _fun53306 }
 183:
            oscar = entity.isGuildVocal;
            zulu = oscar.bind(entity)();
 193:
            if(!zulu) { _fun53306_ip = 233; continue _fun53306 }
 196:
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 5;
            mike = oscar[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.updateChatOpen;
            entity = entity.id;
            entity = mike.bind(zulu)(entity, tango);
 233:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot5 = report;
    tango = function(argFoo, argBar, argBaz) { // Original name: transitionToThreadMessage
        mike = argFoo;
        report = _closure1_slot1;
        oscar = _closure1_slot2;
        entity = 6;
        tango = oscar[entity];
        entity = undefined;
        golf = report.bind(entity)(tango);
        report = mike.parent_id;
        tango = null;
        report = tango != report;
        tango = 'Thread must have a parent ID.';
        tango = golf.bind(entity)(report, tango);
        report = _closure1_slot0;
        tango = 2;
        tango = oscar[tango];
        golf = report.bind(entity)(tango);
        tango = golf.getGuildIdForGenericRedirect;
        options = tango.bind(golf)(mike);
        tango = 4;
        tango = oscar[tango];
        report = report.bind(entity)(tango);
        tango = report.transitionTo;
        golf = _closure1_slot4;
        oscar = golf.CHANNEL;
        zulu = mike.id;
        mike = argBar;
        zulu = oscar.bind(golf)(options, zulu, mike);
        mike = {};
        oscar = true;
        mike['openChannel'] = oscar;
        offset = argBaz;
        yankee = mike;
        oscar = copyDataProperties(yankee, offset);
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    var _closure1_slot6 = tango;
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
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.Routes;
    var _closure1_slot4 = oscar;
    oscar = 7;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/routing/transitionToChannel.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['transitionToChannel'] = report;
    report = function(argFoo, argBar) { // Original name: transitionToThread
        mike = argFoo;
        report = _closure1_slot1;
        oscar = _closure1_slot2;
        entity = 6;
        tango = oscar[entity];
        entity = undefined;
        golf = report.bind(entity)(tango);
        report = mike.parent_id;
        tango = null;
        report = tango != report;
        tango = 'Thread must have a parent ID.';
        tango = golf.bind(entity)(report, tango);
        report = _closure1_slot0;
        tango = 2;
        tango = oscar[tango];
        golf = report.bind(entity)(tango);
        tango = golf.getGuildIdForGenericRedirect;
        golf = tango.bind(golf)(mike);
        tango = 4;
        tango = oscar[tango];
        report = report.bind(entity)(tango);
        tango = report.transitionTo;
        oscar = _closure1_slot4;
        zulu = oscar.CHANNEL;
        mike = mike.id;
        zulu = zulu.bind(oscar)(golf, mike);
        mike = {};
        oscar = true;
        mike['openChannel'] = oscar;
        options = argBar;
        verify = mike;
        oscar = copyDataProperties(verify, options);
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['transitionToThread'] = report;
    zulu['transitionToThreadMessage'] = tango;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: tryTransitionToThreadMessage
        _fun53309: for(var _fun53309_ip = 0; ; ) switch(_fun53309_ip) {
 0:
            report = argCorge;
            tango = _closure1_slot3;
            zulu = tango.getChannel;
            mike = argBar;
            tango = zulu.bind(tango)(mike);
            mike = null;
            if(!(mike == tango)) { _fun53309_ip = 46; continue _fun53309 }
 29:
            oscar = _closure1_slot5;
            zulu = undefined;
            mike = argFoo;
            mike = oscar.bind(zulu)(mike, report);
            _fun53309_ip = 62; continue _fun53309;
 46:
            zulu = _closure1_slot6;
            mike = undefined;
            entity = argBaz;
            entity = zulu.bind(mike)(tango, entity, report);
 62:
            entity = undefined;
            return entity;
        }
    };
    zulu['tryTransitionToThreadMessage'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: transitionToMessage
        _fun53310: for(var _fun53310_ip = 0; ; ) switch(_fun53310_ip) {
 0:
            tango = _closure1_slot3;
            zulu = tango.getChannel;
            entity = argFoo;
            entity = zulu.bind(tango)(entity);
            zulu = null;
            if(!(zulu != entity)) { _fun53310_ip = 127; continue _fun53310 }
 26:
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 2;
            zulu = oscar[zulu];
            tango = undefined;
            golf = report.bind(tango)(zulu);
            zulu = golf.getGuildIdForGenericRedirect;
            golf = zulu.bind(golf)(entity);
            zulu = 4;
            zulu = oscar[zulu];
            tango = report.bind(tango)(zulu);
            zulu = tango.transitionTo;
            oscar = _closure1_slot4;
            report = oscar.CHANNEL;
            mike = entity.id;
            entity = argBar;
            mike = report.bind(oscar)(golf, mike, entity);
            entity = {};
            report = true;
            entity['openChannel'] = report;
            verify = argBaz;
            offset = entity;
            report = copyDataProperties(offset, verify);
            entity = zulu.bind(tango)(mike, entity);
 127:
            entity = undefined;
            return entity;
        }
    };
    zulu['transitionToMessage'] = tango;
    mike = function(argFoo, argBar, argBaz) { // Original name: transitionToStaticChannelRoute
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 4;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.transitionTo;
        golf = _closure1_slot4;
        oscar = golf.CHANNEL;
        zulu = argFoo;
        mike = argBar;
        zulu = oscar.bind(golf)(zulu, mike);
        mike = {};
        oscar = true;
        mike['openChannel'] = oscar;
        options = argBaz;
        verify = mike;
        oscar = copyDataProperties(verify, options);
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['transitionToStaticChannelRoute'] = mike;
    return entity;
})();