// app/modules/markup/MarkupAttachmentLinkRule.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = global;
    golf = entity.Object;
    tango = golf.defineProperty;
    mike = {};
    backup = true;
    mike['value'] = backup;
    entity = '__esModule';
    entity = tango.bind(golf)(zulu, entity, mike);
    entity = /^https:\\/\\/(?:(?:media|images)\.discordapp\.net|(?:cdn\.discordapp\.com))\\/(?:attachments|ephemeral-attachments)\\/\d+\\/\d+\\/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?/;
    var _closure1_slot0 = entity;
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    offset = report.bind(entity)(mike);
    golf = offset.createExperiment;
    mike = {'kind': 'user', 'id': '2023-11_attachment_link_markup', 'label': 'Attachment Link Config User Experiment'};
    tango = {};
    romeo = false;
    tango['enabled'] = romeo;
    mike['defaultConfig'] = tango;
    tango = {'id': 1, 'label': 'Shows links to attachments as regular links'};
    verify = 1;
    yankee = {};
    yankee['enabled'] = romeo;
    tango['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = tango;
    romeo = {'id': 2, 'label': 'Shows links to attachments as "mentions" of the filename'};
    tango = 2;
    foxtrot = {};
    foxtrot['enabled'] = backup;
    romeo['config'] = foxtrot;
    yankee[1] = romeo;
    mike['treatments'] = yankee;
    mike = golf.bind(offset)(mike);
    var _closure1_slot1 = mike;
    mike = {};
    golf = {};
    offset = oscar[verify];
    verify = argBaz;
    verify = verify.bind(entity)(offset);
    verify = verify.defaultRules;
    verify = verify.url;
    offset = verify.order;
    verify = 0.5;
    verify = offset - verify;
    golf['order'] = verify;
    verify = ['h'];
    golf['requiredFirstCharacters'] = verify;
    verify = function(argFoo) { // Original name: match
        _fun61848: for(var _fun61848_ip = 0; ; ) switch(_fun61848_ip) {
 0:
            tango = _closure1_slot0;
            mike = tango.exec;
            entity = argFoo;
            entity = mike.bind(tango)(entity);
            mike = null;
            if(!(mike !== entity)) { _fun61848_ip = 64; continue _fun61848 }
 27:
            report = _closure1_slot1;
            tango = report.getCurrentConfig;
            zulu = {};
            oscar = 'markup';
            zulu['location'] = oscar;
            zulu = tango.bind(report)(zulu);
            zulu = zulu.enabled;
            if(zulu) { _fun61848_ip = 64; continue _fun61848 }
 62:
            return mike;
 64:
            return entity;
        }
    };
    golf['match'] = verify;
    options = function(argFoo) { // Original name: parse
        mike = argFoo;
        entity = 0;
        zulu = mike[entity];
        entity = 1;
        mike = mike[entity];
        entity = {};
        tango = 'attachmentLink';
        entity['type'] = tango;
        report = {};
        tango = 'text';
        report['type'] = tango;
        report['content'] = mike;
        tango = new Array(1);
        tango[0] = report;
        entity['content'] = tango;
        entity['attachmentUrl'] = zulu;
        entity['attachmentName'] = mike;
        return entity;
    };
    golf['parse'] = options;
    mike['attachmentLink'] = golf;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/markup/MarkupAttachmentLinkRule.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();