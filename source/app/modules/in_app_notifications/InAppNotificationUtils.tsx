// app/modules/in_app_notifications/InAppNotificationUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.REACTION_MILESTONE_COUNTS;
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelTypes;
    var _closure1_slot5 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/in_app_notifications/InAppNotificationUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: getNotificationTitle
        _fun86689: for(var _fun86689_ip = 0; ; ) switch(_fun86689_ip) {
 0:
            report = argFoo;
            tango = argBaz;
            zulu = argCorge;
            oscar = _closure1_slot0;
            mike = _closure1_slot1;
            offset = 4;
            mike = mike[offset];
            verify = undefined;
            yankee = oscar.bind(verify)(mike);
            options = yankee.computeChannelName;
            result = _closure1_slot3;
            output = _closure1_slot2;
            sizing = true;
            update = yankee;
            echo = report;
            golf = update[options](echo, result, output, sizing, kilo);
            mike = null;
            oscar = mike != tango;
            romeo = null;
            if(!oscar) { _fun86689_ip = 109; continue _fun86689 }
 71:
            options = _closure1_slot0;
            oscar = _closure1_slot1;
            oscar = oscar[offset];
            offset = options.bind(verify)(oscar);
            verify = offset.computeChannelName;
            options = _closure1_slot3;
            oscar = _closure1_slot2;
            romeo = verify.bind(offset)(tango, options, oscar);
 109:
            oscar = argBar;
            oscar = oscar.nick;
            options = report.type;
            report = _closure1_slot5;
            report = report.GROUP_DM;
            if(!(report !== options)) { _fun86689_ip = 435; continue _fun86689 }
 140:
            report = _closure1_slot5;
            report = report.GUILD_TEXT;
            if(!(report !== options)) { _fun86689_ip = 374; continue _fun86689 }
 157:
            report = _closure1_slot5;
            report = report.GUILD_ANNOUNCEMENT;
            if(!(report !== options)) { _fun86689_ip = 374; continue _fun86689 }
 174:
            report = _closure1_slot5;
            report = report.ANNOUNCEMENT_THREAD;
            if(!(report !== options)) { _fun86689_ip = 222; continue _fun86689 }
 188:
            report = _closure1_slot5;
            report = report.PUBLIC_THREAD;
            if(!(report !== options)) { _fun86689_ip = 222; continue _fun86689 }
 202:
            entity = _closure1_slot5;
            report = entity.PRIVATE_THREAD;
            entity = oscar;
            if(!(report === options)) { _fun86689_ip = 472; continue _fun86689 }
 222:
            if(!(mike == tango)) { _fun86689_ip = 323; continue _fun86689 }
 226:
            if(!(mike == zulu)) { _fun86689_ip = 269; continue _fun86689 }
 230:
            tango = global;
            tango = tango.HermesInternal;
            verify = tango.concat;
            update = '';
            result = ' (';
            sizing = ')';
            echo = oscar;
            output = golf;
            tango = update[verify](echo, result, output, sizing, kilo);
            _fun86689_ip = 321; continue _fun86689;
 269:
            report = zulu.toString;
            kilo = report.bind(zulu)();
            report = global;
            report = report.HermesInternal;
            yankee = report.concat;
            update = '';
            result = ' (';
            sizing = ', ';
            backup = ')';
            echo = oscar;
            output = golf;
            tango = update[yankee](echo, result, output, sizing, kilo, backup, foxtrot);
 321:
            _fun86689_ip = 369; continue _fun86689;
 323:
            report = global;
            report = report.HermesInternal;
            yankee = report.concat;
            update = '';
            result = ' (';
            sizing = ', ';
            backup = ')';
            echo = oscar;
            output = golf;
            kilo = romeo;
            tango = update[yankee](echo, result, output, sizing, kilo, backup, foxtrot);
 369:
            entity = tango;
            _fun86689_ip = 472; continue _fun86689;
 374:
            entity = oscar;
            if(!(mike != zulu)) { _fun86689_ip = 472; continue _fun86689 }
 381:
            mike = zulu.toString;
            kilo = mike.bind(zulu)();
            mike = global;
            mike = mike.HermesInternal;
            options = mike.concat;
            update = '';
            result = ' (';
            sizing = ', ';
            backup = ')';
            echo = oscar;
            output = golf;
            entity = update[options](echo, result, output, sizing, kilo, backup, foxtrot);
            _fun86689_ip = 472; continue _fun86689;
 435:
            mike = global;
            mike = mike.HermesInternal;
            report = mike.concat;
            update = '';
            result = ' (';
            sizing = ')';
            echo = oscar;
            output = golf;
            entity = update[report](echo, result, output, sizing, kilo);
 472:
            return entity;
        }
    };
    zulu['getNotificationTitle'] = tango;
    mike = function(argFoo, argBar) { // Original name: isReactionMilestoneNotification
        _fun86690: for(var _fun86690_ip = 0; ; ) switch(_fun86690_ip) {
 0:
            zulu = argBar;
            entity = null;
            if(!(entity != zulu)) { _fun86690_ip = 88; continue _fun86690 }
 9:
            mike = _closure1_slot5;
            mike = mike.GUILD_ANNOUNCEMENT;
            if(!(zulu !== mike)) { _fun86690_ip = 88; continue _fun86690 }
 26:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 5;
            zulu = zulu[mike];
            mike = undefined;
            report = tango.bind(mike)(zulu);
            tango = report.sumBy;
            zulu = argFoo;
            mike = function(argFoo) {
                _fun86691: for(var _fun86691_ip = 0; ; ) switch(_fun86691_ip) {
 0:
                    entity = argFoo;
                    report = entity.count_details;
                    tango = null;
                    entity = tango == report;
                    oscar = undefined;
                    if(entity) { _fun86691_ip = 26; continue _fun86691 }
 20:
                    oscar = report.burst;
 26:
                    golf = tango != oscar;
                    entity = 0;
                    if(!golf) { _fun86691_ip = 38; continue _fun86691 }
 35:
                    entity = oscar;
 38:
                    oscar = tango == report;
                    zulu = undefined;
                    if(oscar) { _fun86691_ip = 53; continue _fun86691 }
 47:
                    zulu = report.normal;
 53:
                    tango = tango != zulu;
                    mike = 0;
                    if(!tango) { _fun86691_ip = 65; continue _fun86691 }
 62:
                    mike = zulu;
 65:
                    entity = entity + mike;
                    return entity;
                }
            };
            zulu = tango.bind(report)(zulu, mike);
            mike = _closure1_slot4;
            entity = mike.has;
            entity = entity.bind(mike)(zulu);
            return entity;
 88:
            entity = false;
            return entity;
        }
    };
    zulu['isReactionMilestoneNotification'] = mike;
    return entity;
})();