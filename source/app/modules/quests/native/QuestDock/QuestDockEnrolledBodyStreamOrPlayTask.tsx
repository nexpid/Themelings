// app/modules/quests/native/QuestDock/QuestDockEnrolledBodyStreamOrPlayTask.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
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
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    romeo = tango.QUEST_DOCK_EXPANDED_ENROLLED_PADDING_TOP;
    foxtrot = tango.QUEST_DOCK_EXPANDED_PADDING_BOTTOM;
    offset = tango.QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL;
    tango = 3;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot4 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    verify['paddingBottom'] = foxtrot;
    verify['paddingTop'] = romeo;
    verify['paddingHorizontal'] = offset;
    tango['wrapper'] = verify;
    verify = {};
    offset = 5;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_16;
    verify['marginBottom'] = romeo;
    tango['headerWrapper'] = verify;
    verify = {'display': 'flex', 'gap': null, 'flexGrow': 0, 'flexShrink': 0};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_16;
    verify['gap'] = romeo;
    tango['contentWrapper'] = verify;
    verify = {};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_16;
    verify['marginTop'] = romeo;
    tango['footer'] = verify;
    verify = {};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_16;
    romeo = -romeo;
    verify['marginLeft'] = romeo;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.spacing;
    offset = offset.PX_16;
    offset = -offset;
    verify['marginRight'] = offset;
    tango['footerWrapper'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot6 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/quests/native/QuestDock/QuestDockEnrolledBodyStreamOrPlayTask.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: QuestDockEnrolledBodyStreamOrPlayTask
        entity = argFoo;
        zulu = entity.questId;
        sizing = _closure1_slot0;
        kilo = _closure1_slot2;
        options = 6;
        entity = kilo[options];
        tango = undefined;
        mike = sizing.bind(tango)(entity);
        entity = mike.useEnrolledQuestContentProps;
        entity = entity.bind(mike)(zulu);
        backup = entity.quest;
        foxtrot = entity.step;
        romeo = entity.defibrillator;
        yankee = entity.stepActions;
        result = entity.handleTaskSelect;
        output = entity.showMicrophone;
        entity = _closure1_slot6;
        offset = entity.bind(tango)();
        zulu = _closure1_slot5;
        mike = _closure1_slot3;
        entity = {};
        report = offset.wrapper;
        entity['style'] = report;
        golf = _closure1_slot4;
        report = {};
        verify = offset.headerWrapper;
        report['style'] = verify;
        verify = _closure1_slot1;
        oscar = 7;
        oscar = kilo[oscar];
        echo = verify.bind(tango)(oscar);
        oscar = {};
        oscar['quest'] = backup;
        oscar['step'] = foxtrot;
        update = true;
        oscar['withActionSheet'] = update;
        oscar = golf.bind(tango)(echo, oscar);
        report['children'] = oscar;
        oscar = golf.bind(tango)(mike, report);
        report = new Array(3);
        report[0] = oscar;
        oscar = {};
        echo = offset.contentWrapper;
        oscar['style'] = echo;
        options = kilo[options];
        options = sizing.bind(tango)(options);
        sizing = options.QuestBottomSheetContent;
        options = {};
        options['defibrillator'] = romeo;
        options['quest'] = backup;
        options['handleTaskSelect'] = result;
        options['showMicrophone'] = output;
        options['step'] = foxtrot;
        options = golf.bind(tango)(sizing, options);
        oscar['children'] = options;
        oscar = golf.bind(tango)(mike, oscar);
        report[1] = oscar;
        oscar = {};
        options = offset.footerWrapper;
        oscar['style'] = options;
        options = 8;
        options = kilo[options];
        verify = verify.bind(tango)(options);
        options = {};
        options['quest'] = backup;
        options['step'] = foxtrot;
        foxtrot = romeo.isActive;
        options['isDefibrilating'] = foxtrot;
        foxtrot = yankee.onBack;
        options['onBack'] = foxtrot;
        romeo = romeo.start;
        options['onDefib'] = romeo;
        yankee = yankee.onNext;
        options['onConnectConsoleNext'] = yankee;
        offset = offset.footer;
        options['style'] = offset;
        offset = false;
        options['withSafeArea'] = offset;
        options = golf.bind(tango)(verify, options);
        oscar['children'] = options;
        oscar = golf.bind(tango)(mike, oscar);
        report[2] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();