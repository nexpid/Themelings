// app/modules/threads/native/components/ThreadLongPressActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: ThreadLongPressActionSheetConnected
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            backup = entity.channel;
            var _closure2_slot0 = backup;
            entity = entity.onClose;
            var _closure2_slot1 = entity;
            tango = undefined;
            var _closure2_slot4 = tango;
            mike = backup.getGuildId;
            mike = mike.bind(backup)();
            var _closure2_slot2 = mike;
            oscar = _closure1_slot0;
            verify = _closure1_slot2;
            mike = 40;
            zulu = verify[mike];
            options = oscar.bind(tango)(zulu);
            golf = options.useStateFromStores;
            zulu = _closure1_slot5;
            report = new Array(1);
            report[0] = zulu;
            zulu = function() {
                zulu = _closure1_slot5;
                mike = zulu.getGuild;
                entity = _closure2_slot2;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            update = golf.bind(options)(report, zulu);
            zulu = verify[mike];
            options = oscar.bind(tango)(zulu);
            golf = options.useStateFromStoresObject;
            zulu = _closure1_slot7;
            report = new Array(1);
            report[0] = zulu;
            zulu = function() {
                entity = {};
                oscar = _closure1_slot7;
                report = oscar.isMuted;
                mike = _closure2_slot0;
                tango = mike.id;
                tango = report.bind(oscar)(tango);
                entity['isMuted'] = tango;
                tango = _closure1_slot7;
                zulu = tango.hasJoined;
                mike = mike.id;
                mike = zulu.bind(tango)(mike);
                entity['hasJoined'] = mike;
                return entity;
            };
            zulu = golf.bind(options)(report, zulu);
            kilo = zulu.isMuted;
            report = zulu.hasJoined;
            zulu = 41;
            golf = verify[zulu];
            options = oscar.bind(tango)(golf);
            golf = options.useCanManageThread;
            result = golf.bind(options)(backup);
            golf = verify[zulu];
            options = oscar.bind(tango)(golf);
            golf = options.useIsThreadModerator;
            output = golf.bind(options)(backup);
            golf = verify[zulu];
            options = oscar.bind(tango)(golf);
            golf = options.useCanUnarchiveThread;
            sizing = golf.bind(options)(backup);
            zulu = verify[zulu];
            golf = oscar.bind(tango)(zulu);
            zulu = golf.useCanJoinThreadVoice;
            romeo = zulu.bind(golf)(backup);
            zulu = verify[mike];
            offset = oscar.bind(tango)(zulu);
            options = offset.useStateFromStores;
            zulu = _closure1_slot6;
            golf = new Array(1);
            golf[0] = zulu;
            zulu = function() {
                zulu = _closure1_slot6;
                mike = zulu.isInChannel;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            options = options.bind(offset)(golf, zulu);
            mike = verify[mike];
            offset = oscar.bind(tango)(mike);
            golf = offset.useStateFromStores;
            mike = _closure1_slot6;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 42;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = zulu.isEmpty;
                report = _closure1_slot6;
                tango = report.getVoiceStatesForChannel;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = tango.bind(report)(entity);
                entity = mike.bind(zulu)(entity);
                entity = !entity;
                return entity;
            };
            mike = golf.bind(offset)(zulu, mike);
            offset = _closure1_slot1;
            zulu = 43;
            zulu = verify[zulu];
            zulu = offset.bind(tango)(zulu);
            golf = zulu.bind(tango)(backup);
            zulu = 44;
            zulu = verify[zulu];
            offset = offset.bind(tango)(zulu);
            zulu = true;
            yankee = offset.bind(tango)(backup, zulu);
            zulu = 45;
            zulu = verify[zulu];
            zulu = oscar.bind(tango)(zulu);
            oscar = zulu.DeveloperMode;
            zulu = oscar.useSetting;
            oscar = zulu.bind(oscar)();
            var _closure2_slot3 = oscar;
            verify = null;
            if(!(verify == update)) { _fun00002_ip = 456; continue _fun00001 }
 389:
            source = _closure1_slot9;
            offset = _closure1_slot1;
            sequence = _closure1_slot2;
            control = 47;
            zulu = sequence[control];
            offset = offset.bind(tango)(zulu);
            zulu = {};
            vacuum = _closure1_slot0;
            control = sequence[control];
            control = vacuum.bind(tango)(control);
            control = control.AvatarSizes;
            control = control.LARGE;
            zulu['size'] = control;
            zulu['channel'] = backup;
            offset = source.bind(tango)(offset, zulu);
            _fun00002_ip = 521; continue _fun00001;
 456:
            control = _closure1_slot9;
            source = _closure1_slot1;
            config = _closure1_slot2;
            vacuum = 46;
            zulu = config[vacuum];
            source = source.bind(tango)(zulu);
            zulu = {};
            zulu['guild'] = update;
            sequence = _closure1_slot0;
            vacuum = config[vacuum];
            vacuum = sequence.bind(tango)(vacuum);
            vacuum = vacuum.GuildIconSizes;
            vacuum = vacuum.LARGE;
            zulu['size'] = vacuum;
            offset = control.bind(tango)(source, zulu);
 521:
            zulu = {};
            zulu['channel'] = backup;
            zulu['guild'] = update;
            zulu['canManageThread'] = result;
            zulu['canModerateThread'] = output;
            zulu['canUnarchiveThread'] = sizing;
            zulu['isMuted'] = kilo;
            zulu['hasJoined'] = report;
            report = backup.isForumPost;
            report = report.bind(backup)();
            zulu['isForumPost'] = report;
            report = null;
            if(!romeo) { _fun00002_ip = 584; continue _fun00001 }
 576:
            report = null;
            if(options) { _fun00002_ip = 584; continue _fun00001 }
 581:
            report = golf;
 584:
            zulu['handleJoinThreadVoice'] = report;
            zulu['hasActiveThreadVoice'] = mike;
            mike = function(argFoo) { // Original name: getActionSheetButtons
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    report = entity.channel;
                    var _closure3_slot0 = report;
                    offset = entity.canManageThread;
                    mike = entity.canModerateThread;
                    tango = entity.canUnarchiveThread;
                    backup = entity.isMuted;
                    var _closure3_slot1 = backup;
                    romeo = entity.hasJoined;
                    options = entity.isForumPost;
                    output = entity.handleJoinThreadVoice;
                    result = entity.hasActiveThreadVoice;
                    entity = new Array(0);
                    foxtrot = entity.push;
                    zulu = {};
                    golf = 'mark-as-read';
                    zulu['sectionKey'] = golf;
                    sizing = {};
                    echo = _closure1_slot0;
                    update = _closure1_slot2;
                    yankee = 7;
                    kilo = update[yankee];
                    verify = undefined;
                    kilo = echo.bind(verify)(kilo);
                    control = kilo.intl;
                    source = control.string;
                    kilo = update[yankee];
                    kilo = echo.bind(verify)(kilo);
                    kilo = kilo.t;
                    kilo = kilo.e6RscX;
                    kilo = source.bind(control)(kilo);
                    sizing['label'] = kilo;
                    source = _closure1_slot1;
                    kilo = 8;
                    kilo = update[kilo];
                    kilo = source.bind(verify)(kilo);
                    sizing['icon'] = kilo;
                    kilo = 9;
                    kilo = update[kilo];
                    kilo = echo.bind(verify)(kilo);
                    kilo = kilo.EyeIcon;
                    sizing['IconComponent'] = kilo;
                    kilo = function() { // Original name: onPress
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 10;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.ack;
                        mike = _closure3_slot0;
                        zulu = mike.id;
                        mike = true;
                        mike = tango.bind(report)(zulu, mike, mike);
                        return entity;
                    };
                    sizing['onPress'] = kilo;
                    kilo = new Array(1);
                    kilo[0] = sizing;
                    zulu['buttons'] = kilo;
                    zulu = foxtrot.bind(entity)(zulu);
                    zulu = {};
                    foxtrot = 'channel-actions';
                    zulu['sectionKey'] = foxtrot;
                    foxtrot = new Array(0);
                    zulu['buttons'] = foxtrot;
                    kilo = zulu.buttons;
                    foxtrot = kilo.push;
                    if(romeo) { _fun00004_ip = 413; continue _fun00003 }
 265:
                    romeo = {};
                    echo = _closure1_slot0;
                    sizing = _closure1_slot2;
                    update = sizing[yankee];
                    update = echo.bind(verify)(update);
                    source = update.intl;
                    update = source.string;
                    sizing = sizing[yankee];
                    sizing = echo.bind(verify)(sizing);
                    echo = sizing.t;
                    if(options) { _fun00004_ip = 326; continue _fun00003 }
 311:
                    sizing = echo.10kukZ;
                    sizing = update.bind(source)(sizing);
                    _fun00004_ip = 337; continue _fun00003;
 326:
                    echo = echo.ihLPiI;
                    sizing = update.bind(source)(echo);
 337:
                    romeo['label'] = sizing;
                    echo = _closure1_slot1;
                    update = _closure1_slot2;
                    sizing = 14;
                    sizing = update[sizing];
                    sizing = echo.bind(verify)(sizing);
                    romeo['icon'] = sizing;
                    echo = _closure1_slot0;
                    sizing = 15;
                    sizing = update[sizing];
                    sizing = echo.bind(verify)(sizing);
                    sizing = sizing.GroupPlusIcon;
                    romeo['IconComponent'] = sizing;
                    sizing = function() { // Original name: onPress
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 13;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.joinThread;
                        zulu = _closure3_slot0;
                        mike = 'Context Menu';
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    };
                    romeo['onPress'] = sizing;
                    romeo = foxtrot.bind(kilo)(romeo);
                    _fun00004_ip = 563; continue _fun00003;
 413:
                    romeo = {};
                    echo = _closure1_slot0;
                    sizing = _closure1_slot2;
                    update = sizing[yankee];
                    update = echo.bind(verify)(update);
                    source = update.intl;
                    update = source.string;
                    sizing = sizing[yankee];
                    sizing = echo.bind(verify)(sizing);
                    echo = sizing.t;
                    if(options) { _fun00004_ip = 474; continue _fun00003 }
 459:
                    sizing = echo.fa/84u;
                    sizing = update.bind(source)(sizing);
                    _fun00004_ip = 485; continue _fun00003;
 474:
                    echo = echo.2LsZdX;
                    sizing = update.bind(source)(echo);
 485:
                    romeo['label'] = sizing;
                    echo = _closure1_slot1;
                    update = _closure1_slot2;
                    sizing = 11;
                    sizing = update[sizing];
                    sizing = echo.bind(verify)(sizing);
                    romeo['icon'] = sizing;
                    echo = _closure1_slot0;
                    sizing = 12;
                    sizing = update[sizing];
                    sizing = echo.bind(verify)(sizing);
                    sizing = sizing.UserMinusIcon;
                    romeo['IconComponent'] = sizing;
                    sizing = true;
                    romeo['isDestructive'] = sizing;
                    sizing = function() { // Original name: onPress
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 13;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.leaveThread;
                        zulu = _closure3_slot0;
                        mike = 'Context Menu';
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    };
                    romeo['onPress'] = sizing;
                    romeo = foxtrot.bind(kilo)(romeo);
 563:
                    foxtrot = null;
                    if(!(foxtrot != output)) { _fun00004_ip = 717; continue _fun00003 }
 572:
                    sizing = zulu.buttons;
                    kilo = sizing.push;
                    romeo = {};
                    control = _closure1_slot0;
                    echo = _closure1_slot2;
                    update = echo[yankee];
                    update = control.bind(verify)(update);
                    source = update.intl;
                    update = source.string;
                    echo = echo[yankee];
                    echo = control.bind(verify)(echo);
                    echo = echo.t;
                    if(result) { _fun00004_ip = 642; continue _fun00003 }
 629:
                    result = echo.My50nZ;
                    result = update.bind(source)(result);
                    _fun00004_ip = 653; continue _fun00003;
 642:
                    echo = echo.0D/6R0;
                    result = update.bind(source)(echo);
 653:
                    romeo['label'] = result;
                    echo = _closure1_slot1;
                    update = _closure1_slot2;
                    result = 16;
                    result = update[result];
                    result = echo.bind(verify)(result);
                    romeo['icon'] = result;
                    echo = _closure1_slot0;
                    result = 17;
                    result = update[result];
                    result = echo.bind(verify)(result);
                    result = result.PhoneCallIcon;
                    romeo['IconComponent'] = result;
                    romeo['onPress'] = output;
                    romeo = kilo.bind(sizing)(romeo);
 717:
                    romeo = report.threadMetadata;
                    if(!(foxtrot != romeo)) { _fun00004_ip = 739; continue _fun00003 }
 727:
                    romeo = romeo.archived;
                    if(romeo) { _fun00004_ip = 904; continue _fun00003 }
 739:
                    if(!offset) { _fun00004_ip = 1064; continue _fun00003 }
 745:
                    foxtrot = zulu.buttons;
                    romeo = foxtrot.push;
                    offset = {};
                    sizing = _closure1_slot0;
                    kilo = _closure1_slot2;
                    output = kilo[yankee];
                    output = sizing.bind(verify)(output);
                    result = output.intl;
                    output = result.string;
                    kilo = kilo[yankee];
                    kilo = sizing.bind(verify)(kilo);
                    sizing = kilo.t;
                    if(options) { _fun00004_ip = 817; continue _fun00003 }
 802:
                    kilo = sizing.wiIevb;
                    kilo = output.bind(result)(kilo);
                    _fun00004_ip = 828; continue _fun00003;
 817:
                    sizing = sizing.BTs4KS;
                    kilo = output.bind(result)(sizing);
 828:
                    offset['label'] = kilo;
                    sizing = _closure1_slot1;
                    output = _closure1_slot2;
                    kilo = 20;
                    kilo = output[kilo];
                    kilo = sizing.bind(verify)(kilo);
                    offset['icon'] = kilo;
                    sizing = _closure1_slot0;
                    kilo = 21;
                    kilo = output[kilo];
                    kilo = sizing.bind(verify)(kilo);
                    kilo = kilo.XLargeIcon;
                    offset['IconComponent'] = kilo;
                    kilo = function() { // Original name: onPress
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 13;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.archiveThread;
                        zulu = _closure3_slot0;
                        mike = false;
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    };
                    offset['onPress'] = kilo;
                    offset = romeo.bind(foxtrot)(offset);
                    _fun00004_ip = 1064; continue _fun00003;
 904:
                    if(!tango) { _fun00004_ip = 1064; continue _fun00003 }
 910:
                    romeo = zulu.buttons;
                    offset = romeo.push;
                    tango = {};
                    kilo = _closure1_slot0;
                    foxtrot = _closure1_slot2;
                    sizing = foxtrot[yankee];
                    sizing = kilo.bind(verify)(sizing);
                    output = sizing.intl;
                    sizing = output.string;
                    foxtrot = foxtrot[yankee];
                    foxtrot = kilo.bind(verify)(foxtrot);
                    kilo = foxtrot.t;
                    if(options) { _fun00004_ip = 982; continue _fun00003 }
 967:
                    foxtrot = kilo.S9E4Gx;
                    foxtrot = sizing.bind(output)(foxtrot);
                    _fun00004_ip = 993; continue _fun00003;
 982:
                    kilo = kilo.cnRubW;
                    foxtrot = sizing.bind(output)(kilo);
 993:
                    tango['label'] = foxtrot;
                    kilo = _closure1_slot1;
                    sizing = _closure1_slot2;
                    foxtrot = 18;
                    foxtrot = sizing[foxtrot];
                    foxtrot = kilo.bind(verify)(foxtrot);
                    tango['icon'] = foxtrot;
                    kilo = _closure1_slot0;
                    foxtrot = 19;
                    foxtrot = sizing[foxtrot];
                    foxtrot = kilo.bind(verify)(foxtrot);
                    foxtrot = foxtrot.ClockIcon;
                    tango['IconComponent'] = foxtrot;
                    foxtrot = function() { // Original name: onPress
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 13;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.unarchiveThread;
                        zulu = _closure3_slot0;
                        mike = false;
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    };
                    tango['onPress'] = foxtrot;
                    tango = offset.bind(romeo)(tango);
 1064:
                    if(!mike) { _fun00004_ip = 1339; continue _fun00003 }
 1070:
                    tango = report.isLockedThread;
                    romeo = tango.bind(report)();
                    offset = zulu.buttons;
                    report = offset.push;
                    tango = {};
                    output = _closure1_slot0;
                    foxtrot = _closure1_slot2;
                    kilo = foxtrot[yankee];
                    kilo = output.bind(verify)(kilo);
                    sizing = kilo.intl;
                    kilo = sizing.string;
                    foxtrot = foxtrot[yankee];
                    foxtrot = output.bind(verify)(foxtrot);
                    foxtrot = foxtrot.t;
                    if(romeo) { _fun00004_ip = 1239; continue _fun00003 }
 1137:
                    if(options) { _fun00004_ip = 1155; continue _fun00003 }
 1140:
                    romeo = foxtrot.HoCqm5;
                    romeo = kilo.bind(sizing)(romeo);
                    _fun00004_ip = 1166; continue _fun00003;
 1155:
                    output = foxtrot.Ur/0NT;
                    romeo = kilo.bind(sizing)(output);
 1166:
                    tango['label'] = romeo;
                    output = _closure1_slot1;
                    result = _closure1_slot2;
                    romeo = 22;
                    romeo = result[romeo];
                    romeo = output.bind(verify)(romeo);
                    tango['icon'] = romeo;
                    output = _closure1_slot0;
                    romeo = 23;
                    romeo = result[romeo];
                    romeo = output.bind(verify)(romeo);
                    romeo = romeo.LockIcon;
                    tango['IconComponent'] = romeo;
                    romeo = function() { // Original name: onPress
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 13;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.lockThread;
                        mike = _closure3_slot0;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    tango['onPress'] = romeo;
                    romeo = report.bind(offset)(tango);
                    _fun00004_ip = 1339; continue _fun00003;
 1239:
                    if(options) { _fun00004_ip = 1257; continue _fun00003 }
 1242:
                    romeo = foxtrot.jeyb/f;
                    romeo = kilo.bind(sizing)(romeo);
                    _fun00004_ip = 1268; continue _fun00003;
 1257:
                    foxtrot = foxtrot./OKSxs;
                    romeo = kilo.bind(sizing)(foxtrot);
 1268:
                    tango['label'] = romeo;
                    foxtrot = _closure1_slot1;
                    kilo = _closure1_slot2;
                    romeo = 22;
                    romeo = kilo[romeo];
                    romeo = foxtrot.bind(verify)(romeo);
                    tango['icon'] = romeo;
                    foxtrot = _closure1_slot0;
                    romeo = 23;
                    romeo = kilo[romeo];
                    romeo = foxtrot.bind(verify)(romeo);
                    romeo = romeo.LockIcon;
                    tango['IconComponent'] = romeo;
                    romeo = function() { // Original name: onPress
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 13;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.unlockThread;
                        mike = _closure3_slot0;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    tango['onPress'] = romeo;
                    tango = report.bind(offset)(tango);
 1339:
                    if(!mike) { _fun00004_ip = 1499; continue _fun00003 }
 1345:
                    report = zulu.buttons;
                    tango = report.push;
                    mike = {};
                    romeo = _closure1_slot0;
                    offset = _closure1_slot2;
                    foxtrot = offset[yankee];
                    foxtrot = romeo.bind(verify)(foxtrot);
                    kilo = foxtrot.intl;
                    foxtrot = kilo.string;
                    offset = offset[yankee];
                    offset = romeo.bind(verify)(offset);
                    romeo = offset.t;
                    if(options) { _fun00004_ip = 1417; continue _fun00003 }
 1402:
                    offset = romeo.2Mk1TE;
                    offset = foxtrot.bind(kilo)(offset);
                    _fun00004_ip = 1428; continue _fun00003;
 1417:
                    romeo = romeo.NP1yHB;
                    offset = foxtrot.bind(kilo)(romeo);
 1428:
                    mike['label'] = offset;
                    romeo = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    offset = 24;
                    offset = foxtrot[offset];
                    offset = romeo.bind(verify)(offset);
                    mike['icon'] = offset;
                    romeo = _closure1_slot0;
                    offset = 25;
                    offset = foxtrot[offset];
                    offset = romeo.bind(verify)(offset);
                    offset = offset.PencilIcon;
                    mike['IconComponent'] = offset;
                    offset = function() { // Original name: onPress
                        zulu = _closure1_slot1;
                        tango = _closure1_slot2;
                        mike = 26;
                        oscar = tango[mike];
                        entity = undefined;
                        golf = zulu.bind(entity)(oscar);
                        oscar = golf.setSection;
                        report = _closure1_slot8;
                        report = report.OVERVIEW;
                        report = oscar.bind(golf)(report);
                        mike = tango[mike];
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.open;
                        mike = _closure3_slot0;
                        mike = mike.id;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    mike['onPress'] = offset;
                    mike = tango.bind(report)(mike);
 1499:
                    report = zulu.buttons;
                    tango = report.push;
                    mike = {};
                    romeo = _closure1_slot0;
                    foxtrot = _closure1_slot2;
                    offset = foxtrot[yankee];
                    offset = romeo.bind(verify)(offset);
                    sizing = offset.intl;
                    kilo = sizing.string;
                    offset = foxtrot[yankee];
                    offset = romeo.bind(verify)(offset);
                    offset = offset.t;
                    offset = offset.WqhZsr;
                    offset = kilo.bind(sizing)(offset);
                    mike['label'] = offset;
                    kilo = _closure1_slot1;
                    offset = 27;
                    offset = foxtrot[offset];
                    offset = kilo.bind(verify)(offset);
                    mike['icon'] = offset;
                    offset = 28;
                    offset = foxtrot[offset];
                    offset = romeo.bind(verify)(offset);
                    offset = offset.LinkIcon;
                    mike['IconComponent'] = offset;
                    offset = false;
                    mike['isDestructive'] = offset;
                    offset = function() { // Original name: onPress
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 29;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.copyGuildChannelOrThreadLink;
                        mike = _closure3_slot0;
                        zulu = mike.guild_id;
                        mike = mike.id;
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    };
                    mike['onPress'] = offset;
                    mike = tango.bind(report)(mike);
                    mike = entity.push;
                    mike = mike.bind(entity)(zulu);
                    zulu = {};
                    mike = 'notifications';
                    zulu['sectionKey'] = mike;
                    mike = new Array(0);
                    zulu['buttons'] = mike;
                    report = zulu.buttons;
                    tango = report.push;
                    mike = {};
                    kilo = _closure1_slot0;
                    offset = _closure1_slot2;
                    romeo = offset[yankee];
                    romeo = kilo.bind(verify)(romeo);
                    foxtrot = romeo.intl;
                    romeo = foxtrot.string;
                    offset = offset[yankee];
                    offset = kilo.bind(verify)(offset);
                    offset = offset.t;
                    if(backup) { _fun00004_ip = 1821; continue _fun00003 }
 1721:
                    if(options) { _fun00004_ip = 1737; continue _fun00003 }
 1724:
                    backup = offset.bUUd8v;
                    backup = romeo.bind(foxtrot)(backup);
                    _fun00004_ip = 1748; continue _fun00003;
 1737:
                    kilo = offset.nP+YkZ;
                    backup = romeo.bind(foxtrot)(kilo);
 1748:
                    mike['label'] = backup;
                    kilo = _closure1_slot1;
                    sizing = _closure1_slot2;
                    backup = 30;
                    backup = sizing[backup];
                    backup = kilo.bind(verify)(backup);
                    mike['icon'] = backup;
                    kilo = _closure1_slot0;
                    backup = 31;
                    backup = sizing[backup];
                    backup = kilo.bind(verify)(backup);
                    backup = backup.BellIcon;
                    mike['IconComponent'] = backup;
                    backup = function() { // Original name: onPress
                        report = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 32;
                        tango = mike[entity];
                        entity = undefined;
                        oscar = report.bind(entity)(tango);
                        report = oscar.openLazy;
                        tango = _closure1_slot0;
                        zulu = 34;
                        zulu = mike[zulu];
                        tango = tango.bind(entity)(zulu);
                        zulu = 33;
                        zulu = mike[zulu];
                        mike = mike.paths;
                        tango = tango.bind(entity)(zulu, mike);
                        golf = _closure3_slot0;
                        options = golf.id;
                        mike = global;
                        mike = mike.HermesInternal;
                        zulu = mike.concat;
                        mike = 'muteSettings';
                        zulu = zulu.bind(mike)(options);
                        mike = {};
                        options = golf.getGuildId;
                        options = options.bind(golf)();
                        mike['guildId'] = options;
                        golf = golf.id;
                        mike['channelId'] = golf;
                        mike = report.bind(oscar)(tango, zulu, mike);
                        return entity;
                    };
                    mike['onPress'] = backup;
                    backup = tango.bind(report)(mike);
                    _fun00004_ip = 1919; continue _fun00003;
 1821:
                    if(options) { _fun00004_ip = 1837; continue _fun00003 }
 1824:
                    options = offset.Cq/TzM;
                    options = romeo.bind(foxtrot)(options);
                    _fun00004_ip = 1848; continue _fun00003;
 1837:
                    offset = offset.0JQfsL;
                    options = romeo.bind(foxtrot)(offset);
 1848:
                    mike['label'] = options;
                    offset = _closure1_slot1;
                    romeo = _closure1_slot2;
                    options = 35;
                    options = romeo[options];
                    options = offset.bind(verify)(options);
                    mike['icon'] = options;
                    offset = _closure1_slot0;
                    options = 36;
                    options = romeo[options];
                    options = offset.bind(verify)(options);
                    options = options.BellSlashIcon;
                    mike['IconComponent'] = options;
                    options = function() { // Original name: onPress
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 13;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.setNotificationSettings;
                        zulu = _closure3_slot0;
                        mike = {};
                        oscar = _closure3_slot1;
                        oscar = !oscar;
                        mike['muted'] = oscar;
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    };
                    mike['onPress'] = options;
                    mike = tango.bind(report)(mike);
 1919:
                    report = zulu.buttons;
                    tango = report.push;
                    mike = {};
                    options = _closure1_slot0;
                    offset = _closure1_slot2;
                    romeo = offset[yankee];
                    romeo = options.bind(verify)(romeo);
                    foxtrot = romeo.intl;
                    romeo = foxtrot.string;
                    yankee = offset[yankee];
                    yankee = options.bind(verify)(yankee);
                    yankee = yankee.t;
                    yankee = yankee.h850Sk;
                    yankee = romeo.bind(foxtrot)(yankee);
                    mike['label'] = yankee;
                    yankee = _closure1_slot1;
                    golf = 37;
                    golf = offset[golf];
                    golf = yankee.bind(verify)(golf);
                    mike['icon'] = golf;
                    golf = 38;
                    golf = offset[golf];
                    golf = options.bind(verify)(golf);
                    golf = golf.ChannelNotificationIcon;
                    mike['IconComponent'] = golf;
                    oscar = function() { // Original name: onPress
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 39;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.showThreadNotificationsBottomSheet;
                        mike = _closure3_slot0;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    mike['onPress'] = oscar;
                    oscar = true;
                    mike['disableColor'] = oscar;
                    mike = tango.bind(report)(mike);
                    mike = entity.push;
                    mike = mike.bind(entity)(zulu);
                    return entity;
                }
            };
            options = mike.bind(tango)(zulu);
            _closure2_slot4 = options;
            report = _closure1_slot3;
            zulu = report.useEffect;
            golf = options.length;
            mike = new Array(3);
            mike[0] = golf;
            mike[1] = oscar;
            mike[2] = entity;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    mike = _closure2_slot4;
                    zulu = mike.length;
                    mike = 0;
                    mike = mike !== zulu;
                    if(mike) { _fun00006_ip = 25; continue _fun00005 }
 21:
                    mike = _closure2_slot3;
 25:
                    if(mike) { _fun00006_ip = 38; continue _fun00005 }
 28:
                    mike = _closure2_slot1;
                    entity = undefined;
                    entity = mike.bind(entity)();
 38:
                    entity = undefined;
                    return entity;
                }
            };
            entity = zulu.bind(report)(entity, mike);
            zulu = _closure1_slot10;
            golf = _closure1_slot0;
            romeo = _closure1_slot2;
            entity = 48;
            entity = romeo[entity];
            entity = golf.bind(tango)(entity);
            mike = entity.ActionSheet;
            entity = {};
            verify = _closure1_slot9;
            report = 49;
            report = romeo[report];
            report = golf.bind(tango)(report);
            golf = report.ActionSheetIconHeader;
            report = {};
            report['title'] = yankee;
            report['icon'] = offset;
            report = verify.bind(tango)(golf, report);
            entity['header'] = report;
            golf = options.map;
            report = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot9;
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 50;
                mike = tango[mike];
                tango = undefined;
                mike = zulu.bind(tango)(mike);
                mike = mike.ActionSheetRow;
                zulu = mike.Group;
                mike = {};
                options = entity.buttons;
                golf = options.map;
                oscar = function(argFoo, argBar) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        mike = argFoo;
                        options = mike.label;
                        romeo = mike.icon;
                        yankee = mike.IconComponent;
                        oscar = mike.trailing;
                        verify = mike.isDestructive;
                        offset = mike.disableColor;
                        mike = mike.onPress;
                        var _closure4_slot0 = mike;
                        report = _closure1_slot9;
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        foxtrot = 50;
                        mike = mike[foxtrot];
                        tango = undefined;
                        mike = zulu.bind(tango)(mike);
                        zulu = mike.ActionSheetRow;
                        mike = {};
                        mike['label'] = options;
                        options = 'default';
                        if(!verify) { _fun00008_ip = 100; continue _fun00007 }
 96:
                        options = 'danger';
 100:
                        mike['variant'] = options;
                        verify = _closure1_slot9;
                        options = _closure1_slot0;
                        golf = _closure1_slot2;
                        golf = golf[foxtrot];
                        golf = options.bind(tango)(golf);
                        golf = golf.ActionSheetRow;
                        options = golf.Icon;
                        golf = {};
                        golf['source'] = romeo;
                        golf['IconComponent'] = yankee;
                        golf['disableColor'] = offset;
                        golf = verify.bind(tango)(options, golf);
                        mike['icon'] = golf;
                        mike['trailing'] = oscar;
                        entity = function() { // Original name: onPress
                            mike = _closure2_slot1;
                            entity = undefined;
                            mike = mike.bind(entity)();
                            mike = _closure4_slot0;
                            mike = mike.bind(entity)();
                            return entity;
                        };
                        mike['onPress'] = entity;
                        entity = argBar;
                        entity = report.bind(tango)(zulu, mike, entity);
                        return entity;
                    }
                };
                oscar = golf.bind(options)(oscar);
                mike['children'] = oscar;
                entity = entity.sectionKey;
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            golf = golf.bind(options)(report);
            report = new Array(2);
            report[0] = golf;
            if(!oscar) { _fun00002_ip = 959; continue _fun00001 }
 758:
            offset = _closure1_slot9;
            output = _closure1_slot0;
            result = _closure1_slot2;
            backup = 50;
            golf = result[backup];
            golf = output.bind(tango)(golf);
            golf = golf.ActionSheetRow;
            verify = golf.Group;
            options = {};
            romeo = _closure1_slot9;
            golf = result[backup];
            golf = output.bind(tango)(golf);
            yankee = golf.ActionSheetRow;
            golf = {};
            sizing = _closure1_slot9;
            backup = result[backup];
            backup = output.bind(tango)(backup);
            backup = backup.ActionSheetRow;
            kilo = backup.Icon;
            backup = {};
            update = _closure1_slot1;
            echo = 51;
            echo = result[echo];
            echo = update.bind(tango)(echo);
            backup['source'] = echo;
            backup = sizing.bind(tango)(kilo, backup);
            golf['icon'] = backup;
            backup = 7;
            kilo = result[backup];
            kilo = output.bind(tango)(kilo);
            sizing = kilo.intl;
            kilo = sizing.string;
            backup = result[backup];
            backup = output.bind(tango)(backup);
            backup = backup.t;
            backup = backup.DQ797u;
            backup = kilo.bind(sizing)(backup);
            golf['label'] = backup;
            foxtrot = function() { // Original name: onPress
                zulu = _closure2_slot1;
                entity = undefined;
                zulu = zulu.bind(entity)();
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                report = 52;
                report = tango[report];
                oscar = zulu.bind(entity)(report);
                report = oscar.copy;
                mike = _closure2_slot0;
                mike = mike.id;
                mike = report.bind(oscar)(mike);
                mike = 53;
                mike = tango[mike];
                zulu = zulu.bind(entity)(mike);
                mike = zulu.presentIdCopied;
                mike = mike.bind(zulu)();
                return entity;
            };
            golf['onPress'] = foxtrot;
            golf = romeo.bind(tango)(yankee, golf);
            options['children'] = golf;
            golf = 'developer-actions';
            oscar = offset.bind(tango)(verify, options, golf);
 959:
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
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
    tango = report.bind(entity)(tango);
    tango = tango.ChannelSettingsSections;
    var _closure1_slot8 = tango;
    tango = 6;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot9 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot10 = tango;
    tango = 54;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/threads/native/components/ThreadLongPressActionSheet.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ThreadLongPressActionSheet
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            mike = argFoo;
            zulu = mike.channelId;
            var _closure2_slot0 = zulu;
            oscar = mike.onClose;
            var _closure2_slot1 = oscar;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 40;
            zulu = report[zulu];
            report = undefined;
            options = tango.bind(report)(zulu);
            golf = options.useStateFromStores;
            zulu = _closure1_slot4;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                zulu = _closure1_slot4;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = golf.bind(options)(tango, zulu);
            var _closure2_slot2 = golf;
            options = _closure1_slot3;
            tango = options.useEffect;
            zulu = new Array(2);
            zulu[0] = golf;
            zulu[1] = oscar;
            entity = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zulu = _closure2_slot2;
                    mike = null;
                    if(!(mike == zulu)) { _fun00012_ip = 23; continue _fun00011 }
 13:
                    mike = _closure2_slot1;
                    entity = undefined;
                    entity = mike.bind(entity)();
 23:
                    entity = undefined;
                    return entity;
                }
            };
            entity = tango.bind(options)(entity, zulu);
            entity = null;
            zulu = entity != golf;
            if(!zulu) { _fun00010_ip = 151; continue _fun00009 }
 126:
            tango = _closure1_slot9;
            zulu = _closure1_slot11;
            mike = {};
            mike['channel'] = golf;
            mike['onClose'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 151:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();