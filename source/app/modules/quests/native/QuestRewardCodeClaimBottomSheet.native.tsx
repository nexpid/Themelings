// app/modules/quests/native/QuestRewardCodeClaimBottomSheet.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: getPlatformIcon
        _fun91209: for(var _fun91209_ip = 0; ; ) switch(_fun91209_ip) {
 0:
            zulu = argFoo;
            report = _closure1_slot0;
            mike = _closure1_slot2;
            oscar = 5;
            mike = mike[oscar];
            tango = undefined;
            mike = report.bind(tango)(mike);
            mike = mike.QuestRewardCodePlatforms;
            mike = mike.CROSS_PLATFORM;
            if(!(mike !== zulu)) { _fun91209_ip = 349; continue _fun91209 }
 47:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = report.bind(tango)(mike);
            mike = mike.QuestRewardCodePlatforms;
            mike = mike.PC;
            if(!(mike !== zulu)) { _fun91209_ip = 309; continue _fun91209 }
 83:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = report.bind(tango)(mike);
            mike = mike.QuestRewardCodePlatforms;
            mike = mike.PLAYSTATION;
            if(!(mike !== zulu)) { _fun91209_ip = 269; continue _fun91209 }
 119:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = report.bind(tango)(mike);
            mike = mike.QuestRewardCodePlatforms;
            mike = mike.SWITCH;
            if(!(mike !== zulu)) { _fun91209_ip = 229; continue _fun91209 }
 152:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = report.bind(tango)(mike);
            mike = mike.QuestRewardCodePlatforms;
            mike = mike.XBOX;
            if(!(mike !== zulu)) { _fun91209_ip = 189; continue _fun91209 }
 185:
            mike = null;
            return mike;
 189:
            report = _closure1_slot8;
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 10;
            mike = oscar[mike];
            mike = zulu.bind(tango)(mike);
            zulu = mike.XboxNeutralIcon;
            mike = {};
            mike = report.bind(tango)(zulu, mike);
            return mike;
 229:
            report = _closure1_slot8;
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 9;
            mike = oscar[mike];
            mike = zulu.bind(tango)(mike);
            zulu = mike.NintendoSwitchNeutralIcon;
            mike = {};
            mike = report.bind(tango)(zulu, mike);
            return mike;
 269:
            report = _closure1_slot8;
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 8;
            mike = oscar[mike];
            mike = zulu.bind(tango)(mike);
            zulu = mike.PlaystationNeutralIcon;
            mike = {};
            mike = report.bind(tango)(zulu, mike);
            return mike;
 309:
            report = _closure1_slot8;
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 7;
            mike = oscar[mike];
            mike = zulu.bind(tango)(mike);
            zulu = mike.ScreenIcon;
            mike = {};
            mike = report.bind(tango)(zulu, mike);
            return mike;
 349:
            zulu = _closure1_slot8;
            mike = _closure1_slot0;
            report = _closure1_slot2;
            entity = 6;
            entity = report[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.ScienceIcon;
            entity = {};
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: QuestRewardCodeClaimBottomSheet
        _fun91210: for(var _fun91210_ip = 0; ; ) switch(_fun91210_ip) {
 0:
            entity = argFoo;
            report = entity.quest;
            var _closure2_slot0 = report;
            verify = entity.questContent;
            options = entity.questContentPosition;
            tango = undefined;
            var _closure2_slot1 = tango;
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 13;
            entity = zulu[entity];
            entity = mike.bind(tango)(entity);
            entity = entity.bind(tango)();
            mike = entity.bottom;
            entity = _closure1_slot11;
            romeo = entity.bind(tango)(mike);
            oscar = _closure1_slot4;
            zulu = oscar.useMemo;
            mike = new Array(1);
            mike[0] = report;
            entity = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 14;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                zulu = entity.SharedQuestFields;
                mike = zulu.build;
                entity = _closure2_slot0;
                entity = entity.config;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            lima = zulu.bind(oscar)(entity, mike);
            oscar = _closure1_slot4;
            zulu = oscar.useState;
            entity = lima.rewardPlatforms;
            entity = entity.length;
            mike = 1;
            golf = entity > mike;
            config = null;
            entity = null;
            if(golf) { _fun91210_ip = 150; continue _fun91210 }
 138:
            offset = lima.rewardPlatforms;
            golf = 0;
            entity = offset[golf];
 150:
            oscar = zulu.bind(oscar)(entity);
            zulu = _closure1_slot3;
            entity = 2;
            entity = zulu.bind(tango)(oscar, entity);
            zulu = 0;
            whiskey = entity[zulu];
            quebec = entity[mike];
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 15;
            entity = oscar[entity];
            golf = zulu.bind(tango)(entity);
            oscar = golf.useStateFromStoresObject;
            entity = _closure1_slot7;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                entity = {};
                oscar = _closure1_slot7;
                report = oscar.getRewardCode;
                mike = _closure2_slot0;
                tango = mike.id;
                tango = report.bind(oscar)(tango);
                entity['rewardCode'] = tango;
                oscar = _closure1_slot7;
                report = oscar.isFetchingRewardCode;
                tango = mike.id;
                tango = report.bind(oscar)(tango);
                entity['isFetchingRewardCode'] = tango;
                tango = _closure1_slot7;
                zulu = tango.isClaimingReward;
                mike = mike.id;
                mike = zulu.bind(tango)(mike);
                entity['isClaimingReward'] = mike;
                return entity;
            };
            entity = oscar.bind(golf)(zulu, entity);
            record = entity.rewardCode;
            _closure2_slot1 = record;
            echo = entity.isFetchingRewardCode;
            sequence = entity.isClaimingReward;
            entity = lima.rewardPlatforms;
            entity = entity.length;
            kilo = entity > mike;
            if(!kilo) { _fun91210_ip = 294; continue _fun91210 }
 269:
            mike = report.userStatus;
            zulu = config == mike;
            entity = undefined;
            if(zulu) { _fun91210_ip = 290; continue _fun91210 }
 284:
            entity = mike.claimedAt;
 290:
            kilo = config == entity;
 294:
            if(!kilo) { _fun91210_ip = 301; continue _fun91210 }
 297:
            kilo = config == record;
 301:
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 16;
            oscar = zulu[entity];
            offset = mike.bind(tango)(oscar);
            golf = offset.useClaimOrFetchRewardCode;
            oscar = {};
            oscar['isClaimingReward'] = sequence;
            oscar['isFetchingRewardCode'] = echo;
            oscar['quest'] = report;
            oscar['questContent'] = verify;
            oscar['requiresPlatformSelection'] = kilo;
            oscar['rewardCode'] = record;
            oscar['selectedPlatformType'] = whiskey;
            oscar = golf.bind(offset)(oscar);
            foxtrot = oscar.claimCode;
            yankee = oscar.fetchCode;
            offset = oscar.hasError;
            entity = zulu[entity];
            golf = mike.bind(tango)(entity);
            oscar = golf.useClaimRewardCodePrimaryCtaClickHandler;
            entity = {};
            entity['claimCode'] = foxtrot;
            entity['fetchCode'] = yankee;
            entity['hasError'] = offset;
            yankee = _closure1_slot1;
            offset = 17;
            offset = zulu[offset];
            offset = yankee.bind(tango)(offset);
            offset = offset.hideActionSheet;
            entity['onDismiss'] = offset;
            entity['quest'] = report;
            entity['questContent'] = verify;
            entity['questContentPosition'] = options;
            entity['requiresPlatformSelection'] = kilo;
            entity['selectedPlatformType'] = whiskey;
            result = oscar.bind(golf)(entity);
            options = _closure1_slot4;
            golf = options.useCallback;
            oscar = new Array(1);
            oscar[0] = record;
            entity = function() {
                _fun91213: for(var _fun91213_ip = 0; ; ) switch(_fun91213_ip) {
 0:
                    zulu = _closure2_slot1;
                    entity = null;
                    if(!(entity != zulu)) { _fun91213_ip = 164; continue _fun91213 }
 16:
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    zulu = 18;
                    zulu = verify[zulu];
                    golf = undefined;
                    tango = options.bind(golf)(zulu);
                    zulu = tango.copy;
                    mike = _closure2_slot1;
                    mike = mike.code;
                    mike = zulu.bind(tango)(mike);
                    mike = _closure1_slot1;
                    entity = 19;
                    entity = verify[entity];
                    zulu = mike.bind(golf)(entity);
                    mike = zulu.open;
                    entity = {};
                    tango = 'TOAST_QUEST_REWARD_CODE_COPIED';
                    entity['key'] = tango;
                    tango = 20;
                    report = verify[tango];
                    report = options.bind(golf)(report);
                    oscar = report.intl;
                    report = oscar.string;
                    tango = verify[tango];
                    tango = options.bind(golf)(tango);
                    tango = tango.t;
                    tango = tango.MSaeTU;
                    tango = report.bind(oscar)(tango);
                    entity['content'] = tango;
                    tango = function() { // Original name: icon
                        tango = _closure1_slot8;
                        mike = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 21;
                        entity = zulu[entity];
                        zulu = undefined;
                        entity = mike.bind(zulu)(entity);
                        mike = entity.CopyIcon;
                        entity = {};
                        entity = tango.bind(zulu)(mike, entity);
                        return entity;
                    };
                    entity['icon'] = tango;
                    entity = mike.bind(zulu)(entity);
 164:
                    entity = undefined;
                    return entity;
                }
            };
            variable39 = golf.bind(options)(entity, oscar);
            entity = 22;
            entity = zulu[entity];
            zulu = mike.bind(tango)(entity);
            mike = zulu.getRewardCodeRedemptionInstructions;
            entity = {};
            entity['quest'] = report;
            entity['rewardCode'] = record;
            entity['selectedPlatformType'] = whiskey;
            entity['sharedQuestFields'] = lima;
            target = mike.bind(zulu)(entity);
            if(echo) { _fun91210_ip = 557; continue _fun91210 }
 554:
            echo = sequence;
 557:
            if(echo) { _fun91210_ip = 580; continue _fun91210 }
 560:
            entity = kilo;
            if(!entity) { _fun91210_ip = 570; continue _fun91210 }
 566:
            entity = config == whiskey;
 570:
            if(!entity) { _fun91210_ip = 577; continue _fun91210 }
 573:
            entity = config == record;
 577:
            echo = entity;
 580:
            if(echo) { _fun91210_ip = 610; continue _fun91210 }
 583:
            entity = !kilo;
            if(kilo) { _fun91210_ip = 607; continue _fun91210 }
 589:
            zulu = config == record;
            mike = undefined;
            if(zulu) { _fun91210_ip = 603; continue _fun91210 }
 598:
            mike = record.code;
 603:
            entity = config == mike;
 607:
            echo = entity;
 610:
            zulu = _closure1_slot8;
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            entity = 23;
            entity = report[entity];
            entity = oscar.bind(tango)(entity);
            mike = entity.BottomSheet;
            entity = {};
            golf = _closure1_slot8;
            papa = 24;
            report = report[papa];
            report = oscar.bind(tango)(report);
            oscar = report.BottomSheetTitleHeader;
            report = {};
            verify = _closure1_slot0;
            options = _closure1_slot2;
            update = 20;
            offset = options[update];
            offset = verify.bind(tango)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            options = options[update];
            options = verify.bind(tango)(options);
            verify = options.t;
            if(kilo) { _fun91210_ip = 726; continue _fun91210 }
 713:
            options = verify.srzsU1;
            options = offset.bind(yankee)(options);
            _fun91210_ip = 737; continue _fun91210;
 726:
            verify = verify.JRU8dn;
            options = offset.bind(yankee)(verify);
 737:
            report['title'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['header'] = report;
            output = true;
            entity['startExpanded'] = output;
            golf = _closure1_slot9;
            oscar = _closure1_slot6;
            report = {};
            options = romeo.wrapper;
            report['style'] = options;
            yankee = _closure1_slot9;
            if(kilo) { _fun91210_ip = 1276; continue _fun91210 }
 788:
            verify = _closure1_slot6;
            options = {};
            foxtrot = config != record;
            if(!foxtrot) { _fun91210_ip = 805; continue _fun91210 }
 801:
            foxtrot = config != target;
 805:
            if(!foxtrot) { _fun91210_ip = 909; continue _fun91210 }
 808:
            source = _closure1_slot8;
            backup = _closure1_slot0;
            context = _closure1_slot2;
            offset = 25;
            offset = context[offset];
            offset = backup.bind(tango)(offset);
            backup = offset.Text;
            offset = {'style': null, 'variant': 'text-md/normal', 'color': 'text-normal'};
            control = romeo.redemptionInstructions;
            offset['style'] = control;
            vacuum = _closure1_slot1;
            control = 28;
            control = context[control];
            context = vacuum.bind(tango)(control);
            vacuum = context.parse;
            control = {};
            control['allowLinks'] = output;
            control = vacuum.bind(context)(target, output, control);
            offset['children'] = control;
            foxtrot = source.bind(tango)(backup, offset);
 909:
            offset = new Array(2);
            offset[0] = foxtrot;
            source = _closure1_slot9;
            backup = _closure1_slot6;
            foxtrot = {};
            vacuum = _closure1_slot8;
            control = {};
            target = config == record;
            context = undefined;
            if(target) { _fun91210_ip = 947; continue _fun91210 }
 942:
            context = record.code;
 947:
            context = config == context;
            if(!context) { _fun91210_ip = 960; continue _fun91210 }
 954:
            context = romeo.codeCopyWrapperLoading;
 960:
            control['style'] = context;
            status = _closure1_slot8;
            variable36 = _closure1_slot0;
            equality = _closure1_slot2;
            context = 29;
            context = equality[context];
            context = variable36.bind(tango)(context);
            target = context.TableRowGroup;
            context = {};
            variable37 = _closure1_slot8;
            variable40 = 30;
            equality = equality[variable40];
            equality = variable36.bind(tango)(equality);
            variable36 = equality.TableRow;
            equality = {};
            variable41 = config == record;
            variable38 = undefined;
            if(variable41) { _fun91210_ip = 1034; continue _fun91210 }
 1029:
            variable38 = record.code;
 1034:
            equality['label'] = variable38;
            variable41 = config == record;
            variable38 = undefined;
            if(variable41) { _fun91210_ip = 1052; continue _fun91210 }
 1047:
            variable38 = record.code;
 1052:
            variable38 = config != variable38;
            if(!variable38) { _fun91210_ip = 1123; continue _fun91210 }
 1059:
            variable42 = _closure1_slot8;
            variable44 = _closure1_slot0;
            variable45 = _closure1_slot2;
            variable40 = variable45[variable40];
            variable40 = variable44.bind(tango)(variable40);
            variable40 = variable40.TableRow;
            variable41 = variable40.Icon;
            variable40 = {};
            variable43 = 21;
            variable43 = variable45[variable43];
            variable43 = variable44.bind(tango)(variable43);
            variable43 = variable43.CopyIcon;
            variable40['IconComponent'] = variable43;
            variable38 = variable42.bind(tango)(variable41, variable40);
 1123:
            equality['trailing'] = variable38;
            variable40 = config == record;
            variable38 = undefined;
            if(variable40) { _fun91210_ip = 1142; continue _fun91210 }
 1137:
            variable38 = record.code;
 1142:
            variable40 = config != variable38;
            variable38 = undefined;
            if(!variable40) { _fun91210_ip = 1154; continue _fun91210 }
 1151:
            variable38 = variable39;
 1154:
            equality['onPress'] = variable38;
            equality = variable37.bind(tango)(variable36, equality);
            context['children'] = equality;
            context = status.bind(tango)(target, context);
            control['children'] = context;
            vacuum = vacuum.bind(tango)(backup, control);
            control = new Array(2);
            control[0] = vacuum;
            context = config == record;
            vacuum = undefined;
            if(context) { _fun91210_ip = 1206; continue _fun91210 }
 1201:
            vacuum = record.code;
 1206:
            vacuum = config == vacuum;
            if(!vacuum) { _fun91210_ip = 1243; continue _fun91210 }
 1213:
            context = _closure1_slot8;
            record = _closure1_slot5;
            config = {};
            target = romeo.claimingIndicator;
            config['style'] = target;
            config['size'] = papa;
            vacuum = context.bind(tango)(record, config);
 1243:
            control[1] = vacuum;
            foxtrot['children'] = control;
            foxtrot = source.bind(tango)(backup, foxtrot);
            offset[1] = foxtrot;
            options['children'] = offset;
            verify = yankee.bind(tango)(verify, options);
            _fun91210_ip = 1662; continue _fun91210;
 1276:
            offset = _closure1_slot10;
            options = {};
            source = _closure1_slot8;
            vacuum = _closure1_slot0;
            control = _closure1_slot2;
            foxtrot = 25;
            foxtrot = control[foxtrot];
            foxtrot = vacuum.bind(tango)(foxtrot);
            backup = foxtrot.Text;
            foxtrot = {};
            config = 'text-md/normal';
            foxtrot['variant'] = config;
            config = control[update];
            config = vacuum.bind(tango)(config);
            record = config.intl;
            config = record.format;
            control = control[update];
            control = vacuum.bind(tango)(control);
            control = control.t;
            vacuum = control.ZUA/Ul;
            control = {};
            context = lima.defaultReward;
            context = context.messages;
            context = context.name;
            control['rewardName'] = context;
            control = config.bind(record)(vacuum, control);
            foxtrot['children'] = control;
            backup = source.bind(tango)(backup, foxtrot);
            foxtrot = new Array(2);
            foxtrot[0] = backup;
            control = _closure1_slot9;
            source = _closure1_slot6;
            backup = {};
            vacuum = romeo.platformSelectWrapper;
            backup['style'] = vacuum;
            record = _closure1_slot8;
            config = _closure1_slot6;
            vacuum = {};
            context = sequence;
            if(!sequence) { _fun91210_ip = 1452; continue _fun91210 }
 1446:
            context = romeo.platformSelectClaiming;
 1452:
            vacuum['style'] = context;
            status = _closure1_slot8;
            variable37 = _closure1_slot0;
            equality = _closure1_slot2;
            context = 26;
            context = equality[context];
            context = variable37.bind(tango)(context);
            target = context.TableRadioGroup;
            context = {};
            context['onChange'] = quebec;
            quebec = equality[update];
            quebec = variable37.bind(tango)(quebec);
            variable36 = quebec.intl;
            quebec = variable36.string;
            equality = equality[update];
            equality = variable37.bind(tango)(equality);
            equality = equality.t;
            equality = equality.vVcTtL;
            equality = quebec.bind(variable36)(equality);
            context['title'] = equality;
            context['value'] = whiskey;
            context['hasIcons'] = output;
            whiskey = lima.rewardPlatforms;
            lima = whiskey.map;
            sierra = function(argFoo) {
                report = argFoo;
                tango = _closure1_slot8;
                golf = _closure1_slot0;
                options = _closure1_slot2;
                entity = 27;
                entity = options[entity];
                zulu = undefined;
                entity = golf.bind(zulu)(entity);
                mike = entity.TableRadioRow;
                entity = {};
                oscar = _closure1_slot12;
                oscar = oscar.bind(zulu)(report);
                entity['icon'] = oscar;
                oscar = 22;
                oscar = options[oscar];
                golf = golf.bind(zulu)(oscar);
                oscar = golf.getPlatformString;
                oscar = oscar.bind(golf)(report);
                entity['label'] = oscar;
                entity['value'] = report;
                entity = tango.bind(zulu)(mike, entity, report);
                return entity;
            };
            sierra = lima.bind(whiskey)(sierra);
            context['children'] = sierra;
            context = status.bind(tango)(target, context);
            vacuum['children'] = context;
            config = record.bind(tango)(config, vacuum);
            vacuum = new Array(2);
            vacuum[0] = config;
            if(!sequence) { _fun91210_ip = 1634; continue _fun91210 }
 1604:
            context = _closure1_slot8;
            record = _closure1_slot5;
            config = {};
            target = romeo.claimingIndicator;
            config['style'] = target;
            config['size'] = papa;
            sequence = context.bind(tango)(record, config);
 1634:
            vacuum[1] = sequence;
            backup['children'] = vacuum;
            backup = control.bind(tango)(source, backup);
            foxtrot[1] = backup;
            options['children'] = foxtrot;
            verify = yankee.bind(tango)(offset, options);
 1662:
            options = new Array(2);
            options[0] = verify;
            yankee = _closure1_slot8;
            offset = _closure1_slot6;
            verify = {};
            romeo = romeo.footer;
            verify['style'] = romeo;
            backup = _closure1_slot8;
            foxtrot = _closure1_slot0;
            source = _closure1_slot2;
            romeo = 31;
            romeo = source[romeo];
            romeo = foxtrot.bind(tango)(romeo);
            foxtrot = romeo.Button;
            romeo = {};
            romeo['disabled'] = echo;
            romeo['onPress'] = result;
            romeo['grow'] = output;
            echo = _closure1_slot0;
            sizing = _closure1_slot2;
            output = sizing[update];
            output = echo.bind(tango)(output);
            result = output.intl;
            output = result.string;
            sizing = sizing[update];
            sizing = echo.bind(tango)(sizing);
            sizing = sizing.t;
            if(kilo) { _fun91210_ip = 1792; continue _fun91210 }
 1779:
            kilo = sizing.23SS+/;
            kilo = output.bind(result)(kilo);
            _fun91210_ip = 1803; continue _fun91210;
 1792:
            sizing = sizing.SLZMi4;
            kilo = output.bind(result)(sizing);
 1803:
            romeo['text'] = kilo;
            romeo = backup.bind(tango)(foxtrot, romeo);
            verify['children'] = romeo;
            verify = yankee.bind(tango)(offset, verify);
            options[1] = verify;
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
    tango = 1;
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.ActivityIndicator;
    var _closure1_slot5 = options;
    tango = tango.View;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot8 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsxs;
    var _closure1_slot9 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot10 = tango;
    tango = 11;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = function(argFoo) {
        entity = {};
        mike = {};
        zulu = 'flex';
        mike['display'] = zulu;
        report = _closure1_slot1;
        oscar = _closure1_slot2;
        zulu = 12;
        golf = oscar[zulu];
        tango = undefined;
        golf = report.bind(tango)(golf);
        golf = golf.spacing;
        golf = golf.PX_16;
        mike['paddingHorizontal'] = golf;
        zulu = oscar[zulu];
        zulu = report.bind(tango)(zulu);
        zulu = zulu.spacing;
        zulu = zulu.PX_24;
        mike['gap'] = zulu;
        entity['wrapper'] = mike;
        mike = {};
        zulu = argFoo;
        mike['paddingBottom'] = zulu;
        entity['footer'] = mike;
        mike = {};
        zulu = 0.8;
        mike['opacity'] = zulu;
        entity['platformSelectClaiming'] = mike;
        mike = {};
        zulu = 'relative';
        mike['position'] = zulu;
        entity['platformSelectWrapper'] = mike;
        mike = {'position': 'absolute', 'left': '50%', 'top': '50%', 'marginLeft': 4294967284, 'marginTop': 4294967284};
        entity['claimingIndicator'] = mike;
        mike = {};
        zulu = 0.5;
        mike['opacity'] = zulu;
        entity['codeCopyWrapperLoading'] = mike;
        mike = {};
        zulu = 24;
        mike['marginBottom'] = zulu;
        entity['redemptionInstructions'] = mike;
        return entity;
    };
    tango = golf.bind(options)(tango);
    var _closure1_slot11 = tango;
    tango = 33;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/quests/native/QuestRewardCodeClaimBottomSheet.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: QuestRewardCodeClaimBottomSheetConnected
        _fun91217: for(var _fun91217_ip = 0; ; ) switch(_fun91217_ip) {
 0:
            entity = argFoo;
            mike = entity.questId;
            var _closure2_slot0 = mike;
            verify = entity.questContent;
            var _closure2_slot1 = verify;
            options = entity.questContentPosition;
            var _closure2_slot2 = options;
            mike = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 15;
            entity = tango[entity];
            report = undefined;
            oscar = mike.bind(report)(entity);
            tango = oscar.useStateFromStores;
            entity = _closure1_slot7;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                zulu = _closure1_slot7;
                mike = zulu.getQuest;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            offset = tango.bind(oscar)(mike, entity);
            var _closure2_slot3 = offset;
            mike = null;
            if(!(mike != offset)) { _fun91217_ip = 173; continue _fun91217 }
 100:
            oscar = _closure1_slot8;
            tango = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 32;
            entity = yankee[entity];
            entity = tango.bind(report)(entity);
            tango = entity.QuestContentImpressionTrackerNative;
            entity = {};
            yankee = true;
            entity['overrideVisibility'] = yankee;
            entity['questOrQuests'] = offset;
            entity['questContent'] = verify;
            entity['questContentPosition'] = options;
            golf = function() { // Original name: children
                tango = _closure1_slot8;
                zulu = _closure1_slot13;
                mike = {};
                report = _closure2_slot3;
                mike['quest'] = report;
                report = _closure2_slot1;
                mike['questContent'] = report;
                entity = _closure2_slot2;
                mike['questContentPosition'] = entity;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            entity['children'] = golf;
            entity = oscar.bind(report)(tango, entity);
            _fun91217_ip = 205; continue _fun91217;
 173:
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 17;
            zulu = oscar[zulu];
            tango = tango.bind(report)(zulu);
            zulu = tango.hideActionSheet;
            zulu = zulu.bind(tango)();
            entity = null;
 205:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();