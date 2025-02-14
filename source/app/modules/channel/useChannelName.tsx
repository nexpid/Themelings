// app/modules/channel/useChannelName.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = options;
    report = function(argFoo, argBar, argBaz) { // Original name: computeChannelName
        _fun61839: for(var _fun61839_ip = 0; ; ) switch(_fun61839_ip) {
 0:
            zulu = argFoo;
            entity = argBar;
            options = argBaz;
            mike = arguments[3];
            oscar = arguments[4];
            var _closure2_slot0 = options;
            golf = undefined;
            if(!(mike === golf)) { _fun61839_ip = 29; continue _fun61839 }
 27:
            mike = false;
 29:
            if(!(oscar === golf)) { _fun61839_ip = 35; continue _fun61839 }
 33:
            oscar = false;
 35:
            offset = zulu.type;
            verify = _closure1_slot7;
            verify = verify.DM;
            if(!(verify !== offset)) { _fun61839_ip = 599; continue _fun61839 }
 60:
            verify = _closure1_slot7;
            verify = verify.GROUP_DM;
            if(!(verify !== offset)) { _fun61839_ip = 374; continue _fun61839 }
 77:
            verify = _closure1_slot7;
            verify = verify.GUILD_ANNOUNCEMENT;
            if(!(verify !== offset)) { _fun61839_ip = 337; continue _fun61839 }
 94:
            verify = _closure1_slot7;
            verify = verify.GUILD_TEXT;
            if(!(verify !== offset)) { _fun61839_ip = 337; continue _fun61839 }
 111:
            verify = _closure1_slot7;
            verify = verify.GUILD_FORUM;
            if(!(verify !== offset)) { _fun61839_ip = 337; continue _fun61839 }
 128:
            verify = _closure1_slot7;
            verify = verify.GUILD_MEDIA;
            if(!(verify !== offset)) { _fun61839_ip = 337; continue _fun61839 }
 145:
            verify = _closure1_slot7;
            verify = verify.PUBLIC_THREAD;
            if(!(verify !== offset)) { _fun61839_ip = 236; continue _fun61839 }
 159:
            verify = _closure1_slot7;
            verify = verify.PRIVATE_THREAD;
            if(!(verify !== offset)) { _fun61839_ip = 236; continue _fun61839 }
 173:
            verify = _closure1_slot7;
            verify = verify.ANNOUNCEMENT_THREAD;
            if(!(verify !== offset)) { _fun61839_ip = 236; continue _fun61839 }
 187:
            verify = _closure1_slot7;
            verify = verify.GUILD_VOICE;
            if(!(verify !== offset)) { _fun61839_ip = 236; continue _fun61839 }
 201:
            verify = _closure1_slot7;
            verify = verify.GUILD_STAGE_VOICE;
            if(!(verify !== offset)) { _fun61839_ip = 236; continue _fun61839 }
 215:
            verify = _closure1_slot7;
            verify = verify.GUILD_CATEGORY;
            if(!(verify !== offset)) { _fun61839_ip = 236; continue _fun61839 }
 229:
            verify = zulu.name;
            return verify;
 236:
            if(oscar) { _fun61839_ip = 292; continue _fun61839 }
 239:
            if(!mike) { _fun61839_ip = 255; continue _fun61839 }
 242:
            oscar = zulu.isThread;
            oscar = oscar.bind(zulu)();
            if(oscar) { _fun61839_ip = 262; continue _fun61839 }
 255:
            oscar = zulu.name;
            _fun61839_ip = 290; continue _fun61839;
 262:
            yankee = zulu.name;
            verify = global;
            verify = verify.HermesInternal;
            offset = verify.concat;
            verify = '"';
            oscar = offset.bind(verify)(yankee, verify);
 290:
            _fun61839_ip = 335; continue _fun61839;
 292:
            offset = _closure1_slot9;
            verify = zulu.name;
            romeo = offset.bind(golf)(verify);
            verify = global;
            verify = verify.HermesInternal;
            yankee = verify.concat;
            offset = '#"';
            verify = '"';
            oscar = yankee.bind(offset)(romeo, verify);
 335:
            return oscar;
 337:
            yankee = zulu.name;
            if(mike) { _fun61839_ip = 350; continue _fun61839 }
 345:
            oscar = yankee;
            _fun61839_ip = 372; continue _fun61839;
 350:
            verify = global;
            verify = verify.HermesInternal;
            offset = verify.concat;
            verify = '#';
            oscar = offset.bind(verify)(yankee);
 372:
            return oscar;
 374:
            verify = zulu.name;
            oscar = '';
            if(!(oscar === verify)) { _fun61839_ip = 592; continue _fun61839 }
 390:
            offset = zulu.recipients;
            verify = offset.map;
            oscar = entity.getUser;
            offset = verify.bind(offset)(oscar);
            verify = offset.filter;
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            oscar = 5;
            oscar = romeo[oscar];
            oscar = yankee.bind(golf)(oscar);
            oscar = oscar.isNotNullish;
            verify = verify.bind(offset)(oscar);
            oscar = verify.map;
            report = function(argFoo) {
                _fun61840: for(var _fun61840_ip = 0; ; ) switch(_fun61840_ip) {
 0:
                    tango = argFoo;
                    zulu = _closure2_slot0;
                    mike = zulu.getNickname;
                    entity = tango.id;
                    entity = mike.bind(zulu)(entity);
                    mike = null;
                    if(!(mike == entity)) { _fun61840_ip = 68; continue _fun61840 }
 32:
                    report = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 6;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = report.bind(mike)(zulu);
                    mike = zulu.getName;
                    entity = mike.bind(zulu)(tango);
 68:
                    return entity;
                }
            };
            offset = oscar.bind(verify)(report);
            oscar = offset.length;
            report = 0;
            if(!(!(oscar > report))) { _fun61839_ip = 574; continue _fun61839 }
 474:
            oscar = _closure1_slot0;
            backup = _closure1_slot2;
            report = 7;
            verify = backup[report];
            verify = oscar.bind(golf)(verify);
            yankee = verify.intl;
            verify = yankee.formatToPlainString;
            report = backup[report];
            report = oscar.bind(golf)(report);
            report = report.t;
            oscar = report.9Uk8PD;
            report = {};
            foxtrot = _closure1_slot1;
            romeo = 6;
            romeo = backup[romeo];
            backup = foxtrot.bind(golf)(romeo);
            foxtrot = backup.getName;
            romeo = entity.getCurrentUser;
            romeo = romeo.bind(entity)();
            romeo = foxtrot.bind(backup)(romeo);
            report['name'] = romeo;
            report = verify.bind(yankee)(oscar, report);
            _fun61839_ip = 590; continue _fun61839;
 574:
            verify = offset.join;
            oscar = ', ';
            report = verify.bind(offset)(oscar);
 590:
            return report;
 592:
            report = zulu.name;
            return report;
 599:
            report = zulu.recipients;
            zulu = report.map;
            entity = entity.getUser;
            report = zulu.bind(report)(entity);
            zulu = report.filter;
            oscar = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 5;
            entity = verify[entity];
            entity = oscar.bind(golf)(entity);
            entity = entity.isNotNullish;
            report = zulu.bind(report)(entity);
            zulu = _closure1_slot3;
            entity = 1;
            zulu = zulu.bind(golf)(report, entity);
            entity = 0;
            oscar = zulu[entity];
            zulu = null;
            if(!(zulu != oscar)) { _fun61839_ip = 779; continue _fun61839 }
 682:
            report = options.getNickname;
            entity = oscar.id;
            entity = report.bind(options)(entity);
            if(!(zulu == entity)) { _fun61839_ip = 733; continue _fun61839 }
 702:
            report = _closure1_slot1;
            options = _closure1_slot2;
            tango = 6;
            tango = options[tango];
            report = report.bind(golf)(tango);
            tango = report.getName;
            entity = tango.bind(report)(oscar);
 733:
            zulu = zulu != entity;
            tango = '???';
            if(!zulu) { _fun61839_ip = 749; continue _fun61839 }
 746:
            tango = entity;
 749:
            entity = tango;
            if(!mike) { _fun61839_ip = 777; continue _fun61839 }
 755:
            mike = global;
            mike = mike.HermesInternal;
            zulu = mike.concat;
            mike = '@';
            entity = zulu.bind(mike)(tango);
 777:
            return entity;
 779:
            entity = '???';
            return entity;
        }
    };
    var _closure1_slot8 = report;
    tango = function(argFoo) { // Original name: escapeChannelName
        tango = argFoo;
        zulu = tango.replace;
        mike = /\\/g;
        entity = '\\\\';
        tango = zulu.bind(tango)(mike, entity);
        zulu = tango.replace;
        mike = /"/g;
        entity = '\\"';
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot9 = tango;
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
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.ChannelTypes;
    var _closure1_slot7 = oscar;
    oscar = 9;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/channel/useChannelName.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = function(argFoo) { // Original name: useChannelName
        _fun61842: for(var _fun61842_ip = 0; ; ) switch(_fun61842_ip) {
 0:
            mike = arguments[1];
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            tango = undefined;
            if(!(mike === tango)) { _fun61842_ip = 20; continue _fun61842 }
 18:
            mike = false;
 20:
            var _closure2_slot1 = mike;
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 8;
            mike = oscar[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.useStateFromStores;
            oscar = _closure1_slot6;
            mike = new Array(3);
            mike[0] = oscar;
            oscar = _closure1_slot4;
            mike[1] = oscar;
            report = _closure1_slot5;
            mike[2] = report;
            entity = function() {
                _fun61843: for(var _fun61843_ip = 0; ; ) switch(_fun61843_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = null;
                    zulu = entity == zulu;
                    if(zulu) { _fun61843_ip = 45; continue _fun61843 }
 16:
                    golf = _closure1_slot8;
                    yankee = _closure2_slot0;
                    offset = _closure1_slot6;
                    verify = _closure1_slot5;
                    options = _closure2_slot1;
                    romeo = undefined;
                    entity = romeo[golf](yankee, offset, verify, options, golf);
 45:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = oscar;
    zulu['computeChannelName'] = report;
    zulu['escapeChannelName'] = tango;
    mike = function(argFoo) { // Original name: unescapeChannelName
        tango = argFoo;
        zulu = tango.replace;
        mike = /\\"/g;
        entity = '"';
        tango = zulu.bind(tango)(mike, entity);
        zulu = tango.replace;
        mike = /\\\\/g;
        entity = '\\';
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['unescapeChannelName'] = mike;
    return entity;
})();