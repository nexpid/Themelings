// app/modules/guild_automod/native/ModerateUserActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.StyleSheet;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot8 = tango;
    tango = 7;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot9 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot10 = tango;
    options = verify.create;
    tango = {};
    offset = {'padding': 16, 'gap': 16};
    tango['container'] = offset;
    offset = {};
    yankee = 'flex-start';
    offset['justifyContent'] = yankee;
    tango['memberRoles'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot11 = tango;
    tango = golf.memo;
    mike = function(argFoo) {
        _fun91960: for(var _fun91960_ip = 0; ; ) switch(_fun91960_ip) {
 0:
            entity = argFoo;
            yankee = entity.user;
            var _closure2_slot0 = yankee;
            backup = entity.guild;
            var _closure2_slot1 = backup;
            report = undefined;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            golf = 8;
            entity = entity[golf];
            options = mike.bind(report)(entity);
            tango = options.useStateFromStores;
            entity = _closure1_slot4;
            zulu = new Array(1);
            zulu[0] = entity;
            mike = new Array(2);
            mike[0] = yankee;
            mike[1] = backup;
            entity = function() {
                _fun91961: for(var _fun91961_ip = 0; ; ) switch(_fun91961_ip) {
 0:
                    tango = _closure1_slot4;
                    zulu = tango.getMember;
                    report = _closure2_slot1;
                    mike = null;
                    report = mike == report;
                    mike = undefined;
                    if(report) { _fun91961_ip = 40; continue _fun91961 }
 31:
                    report = _closure2_slot1;
                    mike = report.id;
 40:
                    entity = _closure2_slot0;
                    entity = entity.id;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                }
            };
            mike = tango.bind(options)(zulu, entity, mike);
            var _closure2_slot2 = mike;
            entity = null;
            if(!(entity == mike)) { _fun91960_ip = 115; continue _fun91960 }
 109:
            foxtrot = new Array(0);
            _fun91960_ip = 121; continue _fun91960;
 115:
            foxtrot = mike.roles;
 121:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[golf];
            verify = tango.bind(report)(zulu);
            options = verify.useStateFromStoresObject;
            zulu = _closure1_slot6;
            golf = new Array(3);
            golf[0] = zulu;
            zulu = _closure1_slot7;
            golf[1] = zulu;
            zulu = _closure1_slot5;
            golf[2] = zulu;
            tango = new Array(2);
            tango[0] = yankee;
            tango[1] = backup;
            zulu = function() {
                _fun91962: for(var _fun91962_ip = 0; ; ) switch(_fun91962_ip) {
 0:
                    entity = {};
                    mike = _closure2_slot1;
                    tango = null;
                    mike = tango != mike;
                    if(!mike) { _fun91962_ip = 63; continue _fun91962 }
 18:
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    report = 9;
                    oscar = oscar[report];
                    report = undefined;
                    options = golf.bind(report)(oscar);
                    golf = options.canKickMember;
                    oscar = _closure2_slot0;
                    report = _closure2_slot1;
                    mike = golf.bind(options)(oscar, report);
 63:
                    entity['canKickUser'] = mike;
                    mike = _closure2_slot1;
                    mike = tango != mike;
                    if(!mike) { _fun91962_ip = 124; continue _fun91962 }
 79:
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    report = 9;
                    oscar = oscar[report];
                    report = undefined;
                    options = golf.bind(report)(oscar);
                    golf = options.canBanMember;
                    oscar = _closure2_slot0;
                    report = _closure2_slot1;
                    mike = golf.bind(options)(oscar, report);
 124:
                    entity['canBanUser'] = mike;
                    mike = _closure2_slot1;
                    mike = tango != mike;
                    if(!mike) { _fun91962_ip = 178; continue _fun91962 }
 140:
                    verify = _closure1_slot6;
                    options = verify.canManageUser;
                    report = _closure1_slot8;
                    golf = report.MANAGE_NICKNAMES;
                    oscar = _closure2_slot0;
                    report = _closure2_slot1;
                    mike = options.bind(verify)(golf, oscar, report);
 178:
                    entity['canChangeNick'] = mike;
                    mike = _closure2_slot1;
                    mike = tango != mike;
                    if(!mike) { _fun91962_ip = 227; continue _fun91962 }
 194:
                    options = _closure1_slot6;
                    golf = options.can;
                    report = _closure1_slot8;
                    oscar = report.MANAGE_ROLES;
                    report = _closure2_slot1;
                    mike = golf.bind(options)(oscar, report);
 227:
                    entity['canManageRoles'] = mike;
                    mike = _closure2_slot1;
                    mike = tango != mike;
                    if(!mike) { _fun91962_ip = 327; continue _fun91962 }
 243:
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    tango = 10;
                    report = report[tango];
                    tango = undefined;
                    golf = oscar.bind(tango)(report);
                    oscar = golf.canToggleCommunicationDisableOnUser;
                    tango = _closure2_slot1;
                    report = tango.id;
                    zulu = _closure2_slot0;
                    tango = zulu.id;
                    verify = _closure1_slot7;
                    zulu = new Array(3);
                    zulu[0] = verify;
                    verify = _closure1_slot5;
                    zulu[1] = verify;
                    options = _closure1_slot6;
                    zulu[2] = options;
                    mike = oscar.bind(golf)(report, tango, zulu);
 327:
                    entity['canModerateMembers'] = mike;
                    return entity;
                }
            };
            tango = options.bind(verify)(golf, zulu, tango);
            golf = tango.canKickUser;
            zulu = tango.canBanUser;
            sizing = tango.canChangeNick;
            kilo = tango.canManageRoles;
            tango = tango.canModerateMembers;
            if(!(entity != backup)) { _fun91960_ip = 1448; continue _fun91960 }
 235:
            if(!(entity != mike)) { _fun91960_ip = 1448; continue _fun91960 }
 242:
            verify = _closure1_slot1;
            romeo = _closure1_slot2;
            options = 11;
            options = romeo[options];
            result = verify.bind(report)(options);
            output = result.getName;
            options = backup.id;
            update = output.bind(result)(options, report, yankee);
            options = 12;
            options = romeo[options];
            options = verify.bind(report)(options);
            options = options.hideActionSheet;
            _closure2_slot3 = options;
            romeo = new Array(0);
            options = entity != mike;
            if(!options) { _fun91960_ip = 337; continue _fun91960 }
 313:
            verify = golf;
            if(golf) { _fun91960_ip = 322; continue _fun91960 }
 319:
            verify = zulu;
 322:
            if(verify) { _fun91960_ip = 328; continue _fun91960 }
 325:
            verify = sizing;
 328:
            if(verify) { _fun91960_ip = 334; continue _fun91960 }
 331:
            verify = kilo;
 334:
            options = verify;
 337:
            if(!options) { _fun91960_ip = 353; continue _fun91960 }
 340:
            verify = yankee.isNonUserBot;
            verify = verify.bind(yankee)();
            options = !verify;
 353:
            if(!options) { _fun91960_ip = 540; continue _fun91960 }
 359:
            verify = romeo.push;
            kilo = _closure1_slot9;
            echo = _closure1_slot0;
            source = _closure1_slot2;
            options = 13;
            options = source[options];
            options = echo.bind(report)(options);
            yankee = options.TableRow;
            options = {};
            sizing = 14;
            output = source[sizing];
            output = echo.bind(report)(output);
            result = output.intl;
            output = result.string;
            sizing = source[sizing];
            sizing = echo.bind(report)(sizing);
            sizing = sizing.t;
            sizing = sizing.HxrBOT;
            sizing = output.bind(result)(sizing);
            options['label'] = sizing;
            echo = _closure1_slot1;
            sizing = 15;
            sizing = source[sizing];
            output = echo.bind(report)(sizing);
            sizing = {};
            result = 16;
            result = source[result];
            result = echo.bind(report)(result);
            sizing['source'] = result;
            result = 17;
            result = source[result];
            result = echo.bind(report)(result);
            result = result.unsafe_rawColors;
            result = result.PRIMARY_400;
            sizing['color'] = result;
            sizing = kilo.bind(report)(output, sizing);
            options['icon'] = sizing;
            sizing = function() { // Original name: onPress
                mike = _closure2_slot3;
                entity = undefined;
                mike = mike.bind(entity)();
                report = _closure1_slot1;
                mike = _closure1_slot2;
                tango = 18;
                tango = mike[tango];
                report = report.bind(entity)(tango);
                tango = report.pushLazy;
                options = _closure1_slot0;
                zulu = 20;
                zulu = mike[zulu];
                options = options.bind(entity)(zulu);
                zulu = 19;
                zulu = mike[zulu];
                mike = mike.paths;
                zulu = options.bind(entity)(zulu, mike);
                mike = {};
                options = _closure2_slot0;
                options = options.id;
                mike['userId'] = options;
                golf = _closure2_slot1;
                golf = golf.id;
                mike['guildId'] = golf;
                golf = function() { // Original name: onClose
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    entity = 18;
                    mike = tango[entity];
                    entity = undefined;
                    report = zulu.bind(entity)(mike);
                    mike = report.pop;
                    mike = mike.bind(report)();
                    mike = 21;
                    mike = tango[mike];
                    zulu = zulu.bind(entity)(mike);
                    mike = {};
                    report = _closure2_slot1;
                    mike['guild'] = report;
                    tango = _closure2_slot0;
                    mike['user'] = tango;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                mike['onClose'] = golf;
                oscar = function() { // Original name: onRemove
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 18;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.pop;
                    mike = mike.bind(zulu)();
                    return entity;
                };
                mike['onRemove'] = oscar;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            options['onPress'] = sizing;
            options = kilo.bind(report)(yankee, options);
            options = verify.bind(romeo)(options);
 540:
            if(!(entity != mike)) { _fun91960_ip = 793; continue _fun91960 }
 547:
            if(!tango) { _fun91960_ip = 793; continue _fun91960 }
 553:
            verify = _closure1_slot0;
            sizing = _closure1_slot2;
            tango = 22;
            tango = sizing[tango];
            options = verify.bind(report)(tango);
            tango = options.isMemberCommunicationDisabled;
            kilo = tango.bind(options)(mike);
            _closure2_slot4 = kilo;
            options = romeo.push;
            yankee = _closure1_slot9;
            tango = 13;
            tango = sizing[tango];
            tango = verify.bind(report)(tango);
            verify = tango.TableRow;
            tango = {};
            echo = _closure1_slot0;
            source = _closure1_slot2;
            sizing = 14;
            output = source[sizing];
            output = echo.bind(report)(output);
            result = output.intl;
            output = result.string;
            sizing = source[sizing];
            sizing = echo.bind(report)(sizing);
            sizing = sizing.t;
            if(kilo) { _fun91960_ip = 677; continue _fun91960 }
 664:
            kilo = sizing.xpsADQ;
            kilo = output.bind(result)(kilo);
            _fun91960_ip = 688; continue _fun91960;
 677:
            sizing = sizing.qXtNtb;
            kilo = output.bind(result)(sizing);
 688:
            tango['label'] = kilo;
            output = _closure1_slot9;
            echo = _closure1_slot1;
            source = _closure1_slot2;
            kilo = 15;
            kilo = source[kilo];
            sizing = echo.bind(report)(kilo);
            kilo = {};
            result = 23;
            result = source[result];
            result = echo.bind(report)(result);
            kilo['source'] = result;
            result = 17;
            result = source[result];
            result = echo.bind(report)(result);
            result = result.unsafe_rawColors;
            result = result.RED_400;
            kilo['color'] = result;
            kilo = output.bind(report)(sizing, kilo);
            tango['icon'] = kilo;
            kilo = function() { // Original name: onPress
                _fun91966: for(var _fun91966_ip = 0; ; ) switch(_fun91966_ip) {
 0:
                    mike = _closure2_slot3;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    mike = _closure2_slot4;
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 24;
                    zulu = oscar[zulu];
                    tango = tango.bind(entity)(zulu);
                    if(mike) { _fun91966_ip = 80; continue _fun91966 }
 43:
                    zulu = tango.openDisableCommunication;
                    mike = {};
                    oscar = _closure2_slot2;
                    golf = oscar.guildId;
                    mike['guildId'] = golf;
                    oscar = oscar.userId;
                    mike['userId'] = oscar;
                    mike = zulu.bind(tango)(mike);
                    _fun91966_ip = 115; continue _fun91966;
 80:
                    zulu = tango.openEnableCommunication;
                    mike = {};
                    report = _closure2_slot2;
                    oscar = report.guildId;
                    mike['guildId'] = oscar;
                    report = report.userId;
                    mike['userId'] = report;
                    mike = zulu.bind(tango)(mike);
 115:
                    return entity;
                }
            };
            tango['onPress'] = kilo;
            tango = yankee.bind(report)(verify, tango);
            tango = options.bind(romeo)(tango);
 793:
            tango = entity != mike;
            if(!tango) { _fun91960_ip = 803; continue _fun91960 }
 800:
            tango = golf;
 803:
            if(!tango) { _fun91960_ip = 990; continue _fun91960 }
 809:
            golf = romeo.push;
            verify = _closure1_slot9;
            output = _closure1_slot0;
            result = _closure1_slot2;
            tango = 13;
            tango = result[tango];
            tango = output.bind(report)(tango);
            options = tango.TableRow;
            tango = {};
            yankee = 14;
            kilo = result[yankee];
            kilo = output.bind(report)(kilo);
            sizing = kilo.intl;
            kilo = sizing.string;
            yankee = result[yankee];
            yankee = output.bind(report)(yankee);
            yankee = yankee.t;
            yankee = yankee.3glT6e;
            yankee = kilo.bind(sizing)(yankee);
            tango['label'] = yankee;
            output = _closure1_slot1;
            yankee = 15;
            yankee = result[yankee];
            kilo = output.bind(report)(yankee);
            yankee = {};
            sizing = 25;
            sizing = result[sizing];
            sizing = output.bind(report)(sizing);
            yankee['source'] = sizing;
            sizing = 17;
            sizing = result[sizing];
            sizing = output.bind(report)(sizing);
            sizing = sizing.unsafe_rawColors;
            sizing = sizing.RED_400;
            yankee['color'] = sizing;
            yankee = verify.bind(report)(kilo, yankee);
            tango['icon'] = yankee;
            yankee = function() { // Original name: onPress
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 26;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = {};
                report = _closure2_slot1;
                report = report.id;
                mike['guildId'] = report;
                tango = _closure2_slot0;
                tango = tango.id;
                mike['userId'] = tango;
                tango = function() { // Original name: cancelButtonCallback
                    mike = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 21;
                    entity = zulu[entity];
                    zulu = undefined;
                    mike = mike.bind(zulu)(entity);
                    entity = {};
                    report = _closure2_slot1;
                    entity['guild'] = report;
                    tango = _closure2_slot0;
                    entity['user'] = tango;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                mike['cancelButtonCallback'] = tango;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            tango['onPress'] = yankee;
            tango = verify.bind(report)(options, tango);
            tango = golf.bind(romeo)(tango);
 990:
            mike = entity != mike;
            if(!mike) { _fun91960_ip = 1000; continue _fun91960 }
 997:
            mike = zulu;
 1000:
            if(!mike) { _fun91960_ip = 1187; continue _fun91960 }
 1006:
            zulu = romeo.push;
            golf = _closure1_slot9;
            kilo = _closure1_slot0;
            sizing = _closure1_slot2;
            mike = 13;
            mike = sizing[mike];
            mike = kilo.bind(report)(mike);
            tango = mike.TableRow;
            mike = {};
            options = 14;
            verify = sizing[options];
            verify = kilo.bind(report)(verify);
            yankee = verify.intl;
            verify = yankee.string;
            options = sizing[options];
            options = kilo.bind(report)(options);
            options = options.t;
            options = options.5MBJ5O;
            options = verify.bind(yankee)(options);
            mike['label'] = options;
            kilo = _closure1_slot1;
            options = 15;
            options = sizing[options];
            verify = kilo.bind(report)(options);
            options = {};
            yankee = 27;
            yankee = sizing[yankee];
            yankee = kilo.bind(report)(yankee);
            options['source'] = yankee;
            yankee = 17;
            yankee = sizing[yankee];
            yankee = kilo.bind(report)(yankee);
            yankee = yankee.unsafe_rawColors;
            yankee = yankee.RED_400;
            options['color'] = yankee;
            options = golf.bind(report)(verify, options);
            mike['icon'] = options;
            options = function() { // Original name: onPress
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 28;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = {};
                report = _closure2_slot1;
                report = report.id;
                mike['guildId'] = report;
                tango = _closure2_slot0;
                tango = tango.id;
                mike['userId'] = tango;
                tango = function() { // Original name: cancelButtonCallback
                    mike = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 21;
                    entity = zulu[entity];
                    zulu = undefined;
                    mike = mike.bind(zulu)(entity);
                    entity = {};
                    report = _closure2_slot1;
                    entity['guild'] = report;
                    tango = _closure2_slot0;
                    entity['user'] = tango;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                mike['cancelButtonCallback'] = tango;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike['onPress'] = options;
            mike = golf.bind(report)(tango, mike);
            mike = zulu.bind(romeo)(mike);
 1187:
            tango = _closure1_slot10;
            options = _closure1_slot0;
            yankee = _closure1_slot2;
            mike = 29;
            mike = yankee[mike];
            mike = options.bind(report)(mike);
            zulu = mike.BottomSheet;
            mike = {};
            verify = _closure1_slot9;
            golf = 30;
            golf = yankee[golf];
            golf = options.bind(report)(golf);
            kilo = golf.BottomSheetTitleHeader;
            golf = {};
            sizing = 14;
            output = yankee[sizing];
            output = options.bind(report)(output);
            echo = output.intl;
            result = echo.formatToPlainString;
            sizing = yankee[sizing];
            sizing = options.bind(report)(sizing);
            sizing = sizing.t;
            output = sizing.792QKS;
            sizing = {};
            sizing['nick'] = update;
            sizing = result.bind(echo)(output, sizing);
            golf['title'] = sizing;
            golf = verify.bind(report)(kilo, golf);
            mike['header'] = golf;
            kilo = _closure1_slot11;
            golf = kilo.container;
            mike['bodyStyles'] = golf;
            golf = _closure1_slot1;
            oscar = 31;
            oscar = yankee[oscar];
            golf = golf.bind(report)(oscar);
            oscar = {};
            sizing = kilo.memberRoles;
            kilo = new Array(1);
            kilo[0] = sizing;
            oscar['style'] = kilo;
            oscar['guild'] = backup;
            oscar['userRoles'] = foxtrot;
            golf = verify.bind(report)(golf, oscar);
            oscar = new Array(2);
            oscar[0] = golf;
            golf = 32;
            golf = yankee[golf];
            golf = options.bind(report)(golf);
            options = golf.TableRowGroup;
            golf = {};
            yankee = romeo.map;
            offset = function(argFoo, argBar) {
                report = _closure1_slot9;
                entity = _closure1_slot3;
                tango = entity.Fragment;
                zulu = {};
                entity = argFoo;
                zulu['children'] = entity;
                entity = global;
                entity = entity.HermesInternal;
                oscar = entity.concat;
                mike = 'action_';
                entity = argBar;
                mike = oscar.bind(mike)(entity);
                entity = undefined;
                entity = report.bind(entity)(tango, zulu, mike);
                return entity;
            };
            offset = yankee.bind(romeo)(offset);
            golf['children'] = offset;
            golf = verify.bind(report)(options, golf);
            oscar[1] = golf;
            mike['children'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 1448:
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 33;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_automod/native/ModerateUserActionSheet.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();