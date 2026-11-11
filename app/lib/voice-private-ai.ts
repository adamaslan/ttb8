export type VoicePrivateArticle = {
  slug: string; title: string; category: string; description: string;
  diagram: string; takeaways: string[];
  sections: { title: string; paragraphs: string[] }[];
  sources: {label: string; url: string}[];
  code?: {label: string; text: string};
};

export const voicePrivateArticles: VoicePrivateArticle[] = [
  {
    "slug": "voice-ai-own-the-stack-not-the-subscription",
    "title": "Voice AI Ownership: Own the Stack, Not Just a Subscription",
    "category": "Voice AI",
    "description": "Exporting a recording is not exporting a voice model. Separate original work, licensed weights and hosted access before choosing a voice stack.",
    "diagram": "RECORDINGS -> VOICE SETUP -> ENGINE\n     |             |           |\n   masters       export?     license\n     +---------> EXIT TEST <----+",
    "takeaways": [
      "Keep original recordings and a reproducible voice setup.",
      "A base-model license is permission, not exclusive ownership.",
      "Audio export and clone export are different capabilities."
    ],
    "sections": [
      {
        "title": "The file you can download is not always the asset you need",
        "paragraphs": [
          "A hosted voice product can give you excellent audio and still leave the most important part of the workflow behind when you cancel. The WAV you download contains a performance. It is not necessarily a reusable voice model, a speaker embedding, or enough information to reproduce that performance elsewhere. Decide which of those assets the project actually needs before comparing demos.",
          "ElevenLabs makes this distinction explicit in its export help: voice clones cannot be downloaded as standalone files and remain in the account. Its API lets other applications generate with the hosted voice, but that is continued service access, not model export. Keeping the original recordings gives you a way to recreate a clone later; the company warns that recreated clones may sound different."
        ]
      },
      {
        "title": "Draw an asset map before picking a provider",
        "paragraphs": [
          "Separate application code, source recordings, scripts, base weights, speaker prompts, any adapters or fine-tunes, and rendered audio. Each can have a different owner, license, storage location and exit path. A voice ID is a service identifier. A speaker prompt may be tied to one engine. A reference-conditioned demo may never train a new model at all.",
          "Qwen3-TTS offers Base checkpoints for reference-audio cloning. Its selected 0.6B Base model card and repository specify Apache 2.0. That license grants broad permissions under stated conditions; it does not transfer the original creators' copyright to your company. When distributing covered work, preserve the required license and notices and identify modifications. Check dependency and checkpoint licenses separately rather than treating the repository badge as the entire rights inventory."
        ]
      },
      {
        "title": "Read both the output clause and the input license",
        "paragraphs": [
          "ElevenLabs' general terms distinguish retaining rights in Input and Output from owning the foundational Models. They also grant broad nonexclusive, perpetual and irrevocable licenses over Content and, to the extent the user has rights, User Voice Models for stated service and improvement purposes. Its promise not to commercialize a voice on a standalone basis without permission is a separate limit. A training opt-out is not automatically a revocation of every contractual license.",
          "Nor does a provider's permission to use output settle whether a generated recording qualifies for exclusive copyright protection. The U.S. Copyright Office treats human authorship as central and examines AI-assisted work in context. This is a reason to document authorship and agreements, not to promise that every generated syllable is proprietary IP."
        ]
      },
      {
        "title": "Make the exit test an engineering deliverable",
        "paragraphs": [
          "Before committing to the stack, restore the application in a clean environment using a backup of authorized recordings, transcripts, checkpoint identifiers and configuration. Generate a short sample without the original hosted voice account. Record what restores exactly and what must be recreated. Cross-engine voice identity is a test, not an assumption.",
          "Choose hosted access when its convenience is worth its limits. Choose independently runnable weights when control and migration matter more. Either way, keep contracts, source provenance and export formats beside the build instructions. Ownership is a collection of rights and practical capabilities, not a checkbox labeled private. This article is a technical planning guide, not legal advice."
        ]
      }
    ],
    "sources": [
      {
        "label": "ElevenLabs: Can I export my voice clones?",
        "url": "https://elevenlabs.io/docs/help-center/product/voices/voice-cloning/can-i-export-my-voice-clones"
      },
      {
        "label": "ElevenLabs Terms of Use, sections 3-5 and 14",
        "url": "https://elevenlabs.io/terms-of-use"
      },
      {
        "label": "Qwen3-TTS official repository",
        "url": "https://github.com/QwenLM/Qwen3-TTS/"
      },
      {
        "label": "Qwen 0.6B Base model card",
        "url": "https://huggingface.co/Qwen/Qwen3-TTS-12Hz-0.6B-Base"
      },
      {
        "label": "Apache License 2.0",
        "url": "https://www.apache.org/licenses/LICENSE-2.0"
      },
      {
        "label": "U.S. Copyright Office: AI and copyright",
        "url": "https://www.copyright.gov/ai/"
      }
    ]
  },
  {
    "slug": "qwen3-tts-reference-voice-first-prototype",
    "title": "Build a Reference-Voice Prototype with Qwen3-TTS Base",
    "category": "Voice AI",
    "description": "Pick the Base checkpoint, keep the reference transcript accurate and measure your own hardware before promising real-time voice cloning.",
    "diagram": "LOCAL CLIP + TRANSCRIPT\n          |\n       BASE MODEL\n          |\n      WAV -> LISTEN -> ACCEPT",
    "takeaways": [
      "Base, CustomVoice and VoiceDesign are different workflows.",
      "Use a local reference path if the recording should stay local.",
      "Published model sizes do not establish laptop latency."
    ],
    "sections": [
      {
        "title": "Choose the model that solves the actual problem",
        "paragraphs": [
          "Qwen3-TTS is a family, not one interchangeable voice endpoint. The official repository distinguishes Base models that clone from reference audio, CustomVoice models with built-in speakers, and VoiceDesign for creating a voice from a description. Selecting a preset speaker is not the same as reproducing an authorized speaker's voice.",
          "The 0.6B and 1.7B Base checkpoints document rapid reference-audio cloning. The smaller one is a sensible evaluation candidate when resources are limited, but parameter count alone does not prove that it fits a particular laptop or meets a latency target. The official examples use CUDA. Treat CPU or other accelerator paths as compatibility work to verify, not a performance promise."
        ]
      },
      {
        "title": "The reference transcript is part of the input contract",
        "paragraphs": [
          "The documented cloning workflow accepts reference audio plus its transcript. Use a clean recording you have permission to process, and make the transcript match the words actually spoken. Keep background music, another speaker and private conversation out of the reference. A short advertised minimum is not a quality target for every accent, recording environment or sentence.",
          "The API accepts a local path as well as other input forms. Use that path for a local workflow rather than copying a remote demo URL and assuming the same privacy properties. The documented x_vector_only_mode removes the transcript requirement by relying on the speaker embedding, with a possible cloning-quality reduction. Compare it deliberately rather than enabling it to hide missing data."
        ]
      },
      {
        "title": "Start with one short script and a recoverable setup",
        "paragraphs": [
          "Download the exact selected checkpoint and record its identifier, package versions, license and configuration. Keep the reference audio outside the source repository. Build a tiny script-to-WAV path first, then add a UI after you know the engine can complete a short request. Zero-shot conditioning does not require training a bespoke model from scratch.",
          "The pseudocode below describes the contract, not a copy-and-paste SDK invocation. Resolve device and dtype against the current package documentation. Set a practical text limit and handle out-of-memory errors without silently switching to a paid cloud endpoint. An unavailable engine should produce a visible failure, not a surprise upload."
        ]
      },
      {
        "title": "Decide with measurements, not a demo adjective",
        "paragraphs": [
          "Test a greeting, a sentence with names and numbers, and a longer paragraph. Record generation time, output duration, peak memory, pronunciation errors and unwanted continuation. Ask the consenting speaker whether the identity is recognizable. Do not confuse intelligibility with similarity or naturalness with factual correctness.",
          "If the application is meant to work offline, complete model setup first, block the network and repeat generation. Inspect the application's own logging and storage behavior too. Passing this test supports a scoped claim about that generation path; it does not prove encrypted disks, safe backups or a secure delivery channel. No benchmark in this article was reproduced on a reader's hardware."
        ]
      }
    ],
    "sources": [
      {
        "label": "Qwen3-TTS official repository",
        "url": "https://github.com/QwenLM/Qwen3-TTS/"
      },
      {
        "label": "Qwen 0.6B Base model card",
        "url": "https://huggingface.co/Qwen/Qwen3-TTS-12Hz-0.6B-Base"
      },
      {
        "label": "Apache License 2.0",
        "url": "https://www.apache.org/licenses/LICENSE-2.0"
      }
    ],
    "code": {
      "label": "Illustrative pipeline contract, not SDK syntax",
      "text": "reference = local_file(\"authorized-reference.wav\")\ntranscript = exact_words_in(reference)\nengine = load_selected_base_checkpoint(device_config)\naudio = engine.clone(reference, transcript, approved_text)\nsave_locally(audio)\nlisten_before_export(audio)"
    }
  },
  {
    "slug": "voice-ai-asr-tts-agent-pipeline",
    "title": "ASR Is Not TTS: Design the Voice Pipeline Before the Agent",
    "category": "Voice AI",
    "description": "Transcription, reasoning, voice synthesis and delivery have different contracts. Keeping them separate makes failures and privacy boundaries visible.",
    "diagram": "MIC -> ASR -> TEXT -> DRAFT\n                        |\n                   HUMAN REVIEW\n                        |\n                  TTS -> AUDIO -> SEND",
    "takeaways": [
      "A transcription endpoint does not create a cloned voice.",
      "Each pipeline stage needs its own failure and retention policy.",
      "Typed input can remove ASR from the first prototype."
    ],
    "sections": [
      {
        "title": "Four jobs often get sold as one feature",
        "paragraphs": [
          "A voice assistant may recognize speech, decide what to say, synthesize a reply and deliver audio. These are different jobs even when one API bundles them. Automatic speech recognition, or ASR, produces text from speech. Text-to-speech, or TTS, produces speech from text. Reference-voice conditioning changes the voice used for synthesis; it does not turn a transcription model into a cloning engine.",
          "Whisper's official repository describes speech recognition, translation and language identification. It is not a reference-voice TTS model. NEAR AI Cloud's specialized endpoints currently document Whisper audio transcription. That supports an ASR component, not a verified own-voice synthesis capability. Read the endpoint's output contract before building the rest of the product around its name."
        ]
      },
      {
        "title": "Make text the inspection point",
        "paragraphs": [
          "A modular pipeline gives you a place to inspect the transcript before an error becomes a spoken claim. A recognition error in a date or dollar amount can survive flawless downstream synthesis. Mark uncertain or consequential fields for review rather than letting a natural-sounding voice hide the mistake.",
          "For a memo generator, typed text may be enough for the first release. Removing the microphone eliminates permission prompts, speech endpointing and one class of transcription error. It also gives the owner a stable script to approve. Add dictation when it solves a measured user problem, not because every voice product is expected to have a glowing microphone."
        ]
      },
      {
        "title": "Put explicit contracts between stages",
        "paragraphs": [
          "Have recognition return a transcript with the source clip identifier and language settings. Have drafting return editable text, not a send command. Have synthesis return a versioned audio artifact tied to the exact text and engine configuration. Have delivery accept only the approved artifact and a resolved destination. A generation timeout must never be interpreted as permission to retry a send.",
          "Storage and privacy boundaries follow those contracts. The ASR service may see raw speech while the drafting model sees a transcript and the TTS provider sees memo text plus a voice reference. A private drafting endpoint does not retroactively protect a recording uploaded elsewhere. Keep a data-flow inventory and a separate retention decision for each stage."
        ]
      },
      {
        "title": "Budget latency by stage, then simplify",
        "paragraphs": [
          "Measure capture/endpointing, recognition, drafting, first playable audio, full generation and delivery separately. A fast speech decoder cannot compensate for a long transcription upload or a slow language-model response. Report the latency that the listener experiences rather than borrowing a vendor's best-case first-token number.",
          "Begin with push-to-talk or text input, one short memo and an explicit play/approve/export flow. Streaming, interruption and continuous listening can wait. This is an architecture proposal, not a claim that any particular messaging app accepts generated audio or exposes a public integration. Verify the channel's real API, authentication, formats and receipts before promising automatic delivery."
        ]
      }
    ],
    "sources": [
      {
        "label": "OpenAI Whisper official repository",
        "url": "https://github.com/openai/whisper"
      },
      {
        "label": "NEAR AI Cloud: specialized endpoints",
        "url": "https://docs.near.ai/cloud/guides/specialized-endpoints"
      },
      {
        "label": "Qwen3-TTS official repository",
        "url": "https://github.com/QwenLM/Qwen3-TTS/"
      },
      {
        "label": "NEAR AI Cloud: model privacy tiers",
        "url": "https://docs.near.ai/cloud/models"
      }
    ]
  },
  {
    "slug": "voice-ai-evaluation-beyond-sounds-like-me",
    "title": "How to Evaluate a Cloned Voice Beyond \"Sounds Like Me\"",
    "category": "Voice AI",
    "description": "Separate speaker similarity, word accuracy, audio quality and operational reliability. A good demo clip cannot stand in for a repeatable test set.",
    "diagram": "SAME SCRIPTS -> ENGINE A / ENGINE B\n                    |\n       WORDS + IDENTITY + AUDIO + TIME\n                    |\n             LISTEN, THEN DECIDE",
    "takeaways": [
      "Score identity and intelligibility separately.",
      "Measure failures and tail latency, not only successful clips.",
      "Treat reference recordings and evaluation outputs as sensitive."
    ],
    "sections": [
      {
        "title": "One flattering sentence is not a benchmark",
        "paragraphs": [
          "A voice clone can capture a speaker's tone while dropping a negation, inventing a continuation or misreading a name. Another can pronounce every word correctly and still sound like somebody else. These failures matter for different reasons. Collapsing them into one score hides the decision the team actually needs to make.",
          "The Qwen3-TTS documentation describes different model roles and cloning modes; its embedding-only path can reduce cloning quality. Whisper's own documentation warns that recognition performance varies by language and that published speed figures depend on evaluation hardware. These are reminders to test the actual workflow and language, not evidence that one candidate wins on your device."
        ]
      },
      {
        "title": "Build a small, fixed test set",
        "paragraphs": [
          "Write scripts that resemble the product: greetings, names, dates, currencies, abbreviations, a question, a longer paragraph and a sentence with a negation. Add a difficult pronunciation that the consenting speaker cares about. Keep the same scripts, reference recording and generation settings across candidates. Save the exact checkpoint and software versions so the comparison can be repeated.",
          "Use non-sensitive content and the speaker's permission. Do not upload personal clips to public ranking demos to save setup time. Separate a reference set used for conditioning from an evaluation set used to judge performance. If the speaker rerecords a cleaner reference, label that as a changed input rather than crediting the engine with the entire improvement."
        ]
      },
      {
        "title": "Keep four scorecards",
        "paragraphs": [
          "First, word accuracy: listen for omissions, substitutions, extra phrases and punctuation-dependent mistakes. An ASR transcript can help find candidates, but it is not ground truth; the recognizer can make its own errors. Compare against the approved script by listening, especially for names and numbers.",
          "Second, identity: ask the consenting speaker and, where authorized, listeners who know the voice. Third, audio quality: clipping, noise, awkward pauses and unexpected loudness. Fourth, operations: startup time, first playable audio, complete generation time, peak memory and failure rate. Record cancelled and out-of-memory runs rather than deleting them from the denominator."
        ]
      },
      {
        "title": "Publish limits with the result",
        "paragraphs": [
          "Report how many clips were tested, their duration and language, the device, checkpoint and whether the engine was already warm. If you compare generation time to output duration, define the ratio explicitly. A ratio below one does not mean a conversational agent can handle interruption or deliver its first audio immediately.",
          "A local network-blocked generation test supports an offline-path claim. A successful backup restore supports a reproducibility claim. Neither proves ownership of base weights or legal exclusivity in generated audio. Pick the engine that meets the application's acceptance thresholds and document what still fails. A listening test is most useful when it can disqualify a favorite, not when it exists to decorate the launch page. No comparative model benchmark is asserted here."
        ]
      }
    ],
    "sources": [
      {
        "label": "Qwen3-TTS official repository",
        "url": "https://github.com/QwenLM/Qwen3-TTS/"
      },
      {
        "label": "OpenAI Whisper official repository",
        "url": "https://github.com/openai/whisper"
      },
      {
        "label": "Qwen 0.6B Base model card",
        "url": "https://huggingface.co/Qwen/Qwen3-TTS-12Hz-0.6B-Base"
      }
    ]
  },
  {
    "slug": "voice-memos-approve-the-audio-before-send",
    "title": "Voice Memos Need an Approval State, Not Just a Send Button",
    "category": "Voice AI",
    "description": "Bind approval to exact audio, text and destination. Regeneration, recipient changes and uncertain delivery should not silently become new sends.",
    "diagram": "DRAFT -> RENDERED -> REVIEWED\n                       |\n                 APPROVED ARTIFACT\n                       |\n                SEND -> RECEIPT?\nEDIT / REGENERATE -> DRAFT",
    "takeaways": [
      "Approve the actual audio, not only the script.",
      "Editing, regenerating or changing recipients clears approval.",
      "A timeout is an unknown outcome until the channel is checked."
    ],
    "sections": [
      {
        "title": "A familiar voice raises the stakes of a bad send",
        "paragraphs": [
          "Synthetic speech can make a rough draft sound final. It can also make a generated sentence seem like a personal recording. That is why a memo workflow should make the owner review the actual audio and destination before any external send. Approval of an idea is not approval of every future rendering of it.",
          "This article proposes an application state machine. It does not claim that a messaging platform provides a particular API or accepts arbitrary generated files as native voice memos. Verify channel authentication, recipient identifiers, supported formats, file limits and delivery receipts separately. A successful audio export proves only that a file exists."
        ]
      },
      {
        "title": "Bind approval to an immutable artifact",
        "paragraphs": [
          "Create a version for each rendered memo. Store the exact script, the audio digest, the selected voice configuration and the resolved recipient/destination with that version. The owner can play, edit, discard or approve it. If text, audio or destination changes, produce a new version and clear approval. Never let a UI checkbox carry over to a different rendering.",
          "The digest is an identity check, not proof of consent on its own. The approval record must also come from the authenticated owner and refer to the intended send. Keep sensitive audio out of ordinary logs. An internal artifact identifier and state transition usually provide better diagnostics than copying every script and recording into an analytics system."
        ]
      },
      {
        "title": "Separate generation retries from delivery retries",
        "paragraphs": [
          "Generating another local clip is different from sending another message. A synthesis error can return to the editor. A network timeout after a send request can mean the message went through but the acknowledgement was lost. Where supported, use the channel's documented idempotency mechanism and inspect current delivery state before retrying.",
          "If the platform cannot establish whether the first attempt landed, expose an unknown state and ask the owner before creating a duplicate. Do not label an accepted request delivered unless the integration supplies that evidence. A sent receipt may still differ from delivery or playback. Design copy and monitoring around the actual states, not the product team's preferred happy path."
        ]
      },
      {
        "title": "Make abuse controls part of the basic product",
        "paragraphs": [
          "Only accept voice references with appropriate authorization. Do not use generated speech to pass voice authentication, fake a live call or impersonate a speaker without permission. The provider's terms and use restrictions still apply when rendered audio leaves its website. ElevenLabs, for example, makes output use subject to its terms and prohibited-use policy.",
          "Test the state machine with concrete failures: regenerate after approval, change the recipient, double-click send, restart during delivery and receive a timeout after submission. Every case should preserve the distinction between a draft, an approved artifact and a confirmed send. The first useful version can stop at owner-controlled export. Automatic delivery is a separate capability to verify and authorize, not a natural consequence of having a convincing voice."
        ]
      }
    ],
    "sources": [
      {
        "label": "ElevenLabs Terms of Use, sections 3-5 and 14",
        "url": "https://elevenlabs.io/terms-of-use"
      },
      {
        "label": "Qwen3-TTS official repository",
        "url": "https://github.com/QwenLM/Qwen3-TTS/"
      },
      {
        "label": "OWASP Top 10 for LLM Applications",
        "url": "https://genai.owasp.org/llm-top-10/"
      }
    ],
    "code": {
      "label": "Proposed state invariant, not platform API code",
      "text": "can_send = owner_authenticated\n  AND approval.audio_digest == current.audio_digest\n  AND approval.text_version == current.text_version\n  AND approval.destination == current.destination\n  AND approval.not_revoked\n\n# After any edit, regeneration or destination change:\napproval = None"
    }
  },
  {
    "slug": "private-ai-start-with-a-threat-model",
    "title": "Private AI Starts with a Threat Model, Not a Badge",
    "category": "Private AI",
    "description": "Local execution, no training and confidential computing protect different boundaries. Define the data and adversary before choosing the architecture.",
    "diagram": "INPUT -> APP -> MODEL -> TOOLS -> OUTPUT\n  |       |       |        |       |\n logs?  cache?  operator? access? receipt?\n       WHO CAN SEE WHAT, AND WHEN?",
    "takeaways": [
      "Name the protected data and the actor you want to exclude.",
      "No-training policies do not by themselves establish zero retention.",
      "Map tools, logs and storage as well as the model call."
    ],
    "sections": [
      {
        "title": "Private is not one technical property",
        "paragraphs": [
          "A local model, a cloud endpoint with a no-training policy and a hardware-isolated inference service can all be described as private. They do not offer the same protection. Local execution changes where computation happens. A data-use policy constrains a provider's stated behavior. Confidential computing can add a hardware-backed boundary around a verified workload. None makes the entire application safe by itself.",
          "Start with a sentence that can fail a test: customer source documents must not leave an approved environment; infrastructure administrators must not read plaintext inference; or one customer must never retrieve another customer's notes. These are distinct requirements. A blanket badge can conceal that one is met while the others are not."
        ]
      },
      {
        "title": "Follow one request through every system",
        "paragraphs": [
          "Draw the path from the browser or microphone to application servers, preprocessing, retrieval, model inference, tools and the final answer. Add logs, error traces, analytics, caches, backups and support access. A short-lived prompt can still be copied into a long-lived crash report. A local model can still receive text from an application that sends telemetry elsewhere.",
          "OWASP's LLM guidance treats sensitive-information disclosure and vector/embedding weaknesses as separate risks. That is useful because the model is only one component. Authorization mistakes in retrieval or an overpowered tool can disclose information even when the inference provider follows its policy perfectly."
        ]
      },
      {
        "title": "Read the actual boundary in the documentation",
        "paragraphs": [
          "Ollama's FAQ distinguishes local operation from cloud-hosted models and documents a local-only mode. NEAR's model catalog distinguishes Confidential TEE, third-party TEE and Incognito execution. For Incognito routes, the upstream model runs outside a TEE; protecting the gateway does not extend enclave guarantees to the upstream provider.",
          "ElevenLabs' data-use controls offer another kind of boundary: its help describes model-improvement use and a prospective opt-out, while its privacy policy describes retention and rights. That does not establish local execution, portable clones or zero retention. Ask which promise the product needs instead of borrowing a stronger one from adjacent marketing language."
        ]
      },
      {
        "title": "Turn the threat model into acceptance tests",
        "paragraphs": [
          "Use synthetic documents with unique canary strings to check cross-customer retrieval. Block network access after model setup to test a claimed offline inference path. Inspect sampled logs for plaintext. Check that unsupported confidential execution fails closed rather than silently choosing a different route. State what each test covers and what remains outside it.",
          "Finish with a short boundary statement: what data is processed, where, by whom, for how long and under which controls. Add the assumptions, such as a trusted owner device or a verified SDK configuration. This is more useful to an engineer than calling the whole product private. When a requirement changes, the boundary statement tells you which implementation and contract checks must change with it."
        ]
      }
    ],
    "sources": [
      {
        "label": "OWASP Top 10 for LLM Applications",
        "url": "https://genai.owasp.org/llm-top-10/"
      },
      {
        "label": "Ollama FAQ: local-only mode, network binding and data handling",
        "url": "https://docs.ollama.com/faq"
      },
      {
        "label": "NEAR AI Cloud: model privacy tiers",
        "url": "https://docs.near.ai/cloud/models"
      },
      {
        "label": "ElevenLabs: model improvement and data-use controls",
        "url": "https://elevenlabs.io/docs/help-center/legal/is-my-data-used-to-improve-eleven-labs-ai-models"
      },
      {
        "label": "ElevenLabs Privacy Policy",
        "url": "https://elevenlabs.io/privacy-policy"
      }
    ]
  },
  {
    "slug": "confidential-ai-tee-attestation-is-not-a-logo",
    "title": "Confidential AI: Attestation Is Not a Logo",
    "category": "Private AI",
    "description": "A TEE claim needs a verified workload, key and client path. Gateway evidence does not automatically prove where the model ran.",
    "diagram": "CLIENT -> VERIFIED KEY -> ENCRYPTED REQUEST\n                              |\n                       ATTESTED WORKLOAD\n                              |\n                         RESPONSE\n GATEWAY EVIDENCE != MODEL EVIDENCE",
    "takeaways": [
      "Verify the model boundary as well as the gateway.",
      "Optional encryption is not enabled merely because an SDK supports it.",
      "Treat unsupported privacy paths as failures, not fallback opportunities."
    ],
    "sections": [
      {
        "title": "The security claim has to name a workload",
        "paragraphs": [
          "Confidential computing is relevant when a team wants stronger protection from the infrastructure that hosts inference. The important question is not whether a provider uses trusted hardware somewhere. It is whether the particular model workload, its key and the client request path meet the application's policy.",
          "A TEE does not remove the need to trust the client device, verify application behavior or control the answer's destination. Nor does it prove a prompt is safe, a model is correct or a downstream tool is authorized. Treat it as one boundary in a larger system, with its own evidence and failure cases."
        ]
      },
      {
        "title": "The gateway and model can have different evidence",
        "paragraphs": [
          "NEAR AI Cloud's gateway-attestation guide says gateway evidence is not evidence for a model environment. If policy requires model evidence, check model attestations as well. That distinction prevents a common reasoning error: seeing a verified gateway and assuming every upstream inference destination has the same protection.",
          "The catalog makes the routing difference explicit. Confidential TEE models run on NEAR's own fleet, third-party Confidential TEE models rely on another provider's enclave and evidence, and Incognito models run upstream outside a TEE. The catalog also documents client-dependent model-verification differences for third-party routes. Choose an exact model and supported verification path, not an abstract provider brand."
        ]
      },
      {
        "title": "Encryption must match verification",
        "paragraphs": [
          "The inference SDK documents optional E2EE for supported Chat fields and supported NEAR TEE models. It is disabled by default and is not a blanket feature for every API shape. The E2EE guide describes encrypting to a model key cryptographically bound to attestation. A key copied from an unverified response is not the same as a verified recipient key.",
          "Inspect the current SDK behavior and acceptance policy rather than implementing a custom cryptographic shortcut from a blog snippet. Confirm freshness and validation requirements in the provider's exact guide. If the intended path is unsupported or evidence does not satisfy policy, stop that request instead of silently falling back to ordinary hosted inference."
        ]
      },
      {
        "title": "Evidence belongs in the operations plan",
        "paragraphs": [
          "Record the selected model, SDK version, verification mode and policy outcome without logging plaintext prompts. Test a failure case: unsupported model, unavailable evidence or rejected verification. The application should explain that confidential execution could not be established and preserve the user's data boundary.",
          "Then check everything outside the enclave: application logs, retrieval storage, uploads, browser state and returned output. An attested inference hop cannot undo a prior plaintext disclosure. This article describes current documentation and a proposed verification approach, not an independent audit of NEAR hardware or a reproduced attestation test. The useful claim is narrow: a particular client checked particular evidence for a particular request path."
        ]
      }
    ],
    "sources": [
      {
        "label": "NEAR AI Cloud: model privacy tiers",
        "url": "https://docs.near.ai/cloud/models"
      },
      {
        "label": "NEAR AI Cloud: gateway attestation",
        "url": "https://docs.near.ai/cloud/verification/cloud-api/gateway-attestation"
      },
      {
        "label": "NEAR AI Cloud: inference SDK",
        "url": "https://docs.near.ai/cloud/inference-sdk"
      },
      {
        "label": "NEAR AI Cloud: E2EE chat completions",
        "url": "https://docs.near.ai/cloud/guides/e2ee-chat-completions"
      }
    ]
  },
  {
    "slug": "private-rag-permissions-before-vector-search",
    "title": "Private RAG: Put Permissions Before Vector Search",
    "category": "Private AI",
    "description": "A private model cannot fix retrieval that hands it the wrong customer's documents. Enforce access before building context and preserve deletion paths.",
    "diagram": "USER -> AUTHORIZATION -> ALLOWED CORPUS\n                              |\n                         RETRIEVAL\n                              |\n                       CONTEXT -> MODEL\n DENIED CONTENT NEVER ENTERS THE PROMPT",
    "takeaways": [
      "The vector database is an access boundary, not just a relevance engine.",
      "Embeddings and caches belong in the sensitive-data inventory.",
      "Retrieved text is evidence, not authority to run tools."
    ],
    "sections": [
      {
        "title": "Retrieval is where private data becomes model input",
        "paragraphs": [
          "Retrieval-augmented generation can answer from private documents without putting the whole corpus into a prompt. But it can also turn a small authorization mistake into a fluent disclosure. Once the application hands the model an unauthorized chunk, asking it not to reveal the chunk is too late to be the primary access control.",
          "OWASP lists vector/embedding weaknesses and sensitive-information disclosure among LLM application risks. The practical lesson is to review the retrieval system as a data-access service. A model provider's retention policy does not decide which employee or customer is allowed to see a source document."
        ]
      },
      {
        "title": "Authorize the corpus before assembling context",
        "paragraphs": [
          "Resolve the authenticated user and the allowed document scope on the server. Carry tenant and document permissions into indexing and retrieval. Use the storage system's documented access mechanisms, then recheck selected results against current permissions before building the model context. Do not rely on a client-supplied tenant identifier or a prompt instruction to enforce access.",
          "A filter is only as reliable as its metadata, update path and query semantics. Test the case where permissions change after indexing. Test shared documents, deleted users and revoked memberships. If the vector backend cannot enforce the necessary isolation reliably, separate indexes or another retrieval design may be the safer choice. That is a threat-model decision, not a universal claim that one index layout wins."
        ]
      },
      {
        "title": "Follow copies and derivatives",
        "paragraphs": [
          "Keep an inventory of source text, extracted text, chunks, embeddings, reranker inputs, context caches and generated answers. Embeddings are not a promise of anonymization. Even when an individual vector is not readable prose, access to a searchable derived store can still expose relationships or help retrieve the underlying material.",
          "Deletion therefore needs a lineage plan. Track which chunks and derived records came from each source and how backups are treated. A document disappearing from the upload UI does not prove its chunks or cached answers are gone. Define the policy and verify it across the systems that actually store copies."
        ]
      },
      {
        "title": "Treat retrieved instructions as untrusted content",
        "paragraphs": [
          "A document can contain text that asks the assistant to reveal other files or invoke tools. Retrieval makes that text relevant as source material; it does not give it authority. Keep tool authorization separate from document content, limit tool scopes and require the application's normal approval rules for external effects.",
          "Build a two-tenant canary test with distinctive synthetic documents. Ask each tenant for the other's canary, try direct and indirect queries, then revoke a document and repeat. Inspect retrieved chunks as well as the final answer so a model refusal does not hide a retrieval failure. Private RAG succeeds when unauthorized material never enters the context, not merely when the model happens to stay quiet about it."
        ]
      }
    ],
    "sources": [
      {
        "label": "OWASP Top 10 for LLM Applications",
        "url": "https://genai.owasp.org/llm-top-10/"
      },
      {
        "label": "NEAR AI Cloud: model privacy tiers",
        "url": "https://docs.near.ai/cloud/models"
      },
      {
        "label": "Ollama FAQ: local-only mode, network binding and data handling",
        "url": "https://docs.ollama.com/faq"
      }
    ]
  },
  {
    "slug": "local-ai-offline-is-a-test-not-an-assumption",
    "title": "Local AI: Offline Is a Test, Not an Assumption",
    "category": "Private AI",
    "description": "A downloaded model does not make the whole application offline. Check cloud features, network exposure, logs and backups before making the claim.",
    "diagram": "DOWNLOAD + PIN -> DISABLE CLOUD\n                       |\n                BLOCK NETWORK\n                       |\n                REPEAT REAL TASK\n                       |\n             INSPECT LOGS + STORAGE",
    "takeaways": [
      "Distinguish local models from local clients using cloud models.",
      "Loopback binding is not a complete application security model.",
      "Test the full task after network access is blocked."
    ],
    "sections": [
      {
        "title": "The desktop icon does not identify the processing location",
        "paragraphs": [
          "A local application can call a cloud model, run web search or upload error traces. A local model can be embedded in a product with remote storage. The word local should describe a measured request path, not just the fact that a window runs on a laptop.",
          "Ollama's FAQ makes a useful distinction: local operation does not send prompts and data to Ollama, while cloud-hosted models process prompts and responses under a separate data-handling policy. It also documents local-only mode, which disables cloud models and web search. Those are scoped product statements, not a guarantee about every application layered on top."
        ]
      },
      {
        "title": "Configure the path you intend to test",
        "paragraphs": [
          "Pin the runtime and model checkpoint, complete required downloads and document where files are stored. For Ollama, current documentation includes disabling cloud features with OLLAMA_NO_CLOUD=1 and restarting; the logs report that cloud is disabled. Use the configuration method appropriate to the actual platform and runtime version.",
          "Then inspect the application itself: remote embeddings, browser extensions, analytics, crash reporting and automatic cloud fallback can change the boundary. If a dependency requires network access for a task, document the exception or remove it from the offline path. Do not simply rename a cloud-dependent feature as optional after it has already received sensitive data."
        ]
      },
      {
        "title": "Protect the machine and the network boundary",
        "paragraphs": [
          "Ollama documents a default binding to 127.0.0.1 on port 11434. Changing the bind address to expose the service is a security decision, not a performance tweak. Keep the intended local boundary unless authenticated remote access is deliberately designed and tested. Do not assume a model server is a full user-authentication layer.",
          "Local data also has a life beyond the process: prompt histories, temporary files, swap, backups and cloud-synced directories. Use the operating system's supported access controls and storage protections. Decide what is retained and how deletion works. Offline inference does not imply that a stolen unlocked laptop or a shared user account cannot read the files."
        ]
      },
      {
        "title": "Make the acceptance test honest",
        "paragraphs": [
          "After setup, block network access and repeat the actual workflow: open the application, load the selected model, perform retrieval if needed and generate an answer. Record which features still work. Inspect logs and expected output paths. Test restart behavior so a warm cache does not conceal a missing dependency.",
          "Measure memory, load time and response time on the actual device. Context length and concurrency affect resource use; a model fitting once does not prove it can serve several users comfortably. If the local path is too slow, an approved cloud design may be the better product. The result should be a clear boundary and an observed tradeoff, not a moral ranking of local versus cloud."
        ]
      }
    ],
    "sources": [
      {
        "label": "Ollama FAQ: local-only mode, network binding and data handling",
        "url": "https://docs.ollama.com/faq"
      },
      {
        "label": "OWASP Top 10 for LLM Applications",
        "url": "https://genai.owasp.org/llm-top-10/"
      }
    ]
  },
  {
    "slug": "private-ai-vendor-checklist-data-rights-exit",
    "title": "Buying Private AI: Check Data Rights and the Exit Door",
    "category": "Private AI",
    "description": "Compare retention, training, execution boundaries, artifact export and commercial rights separately. A no-training promise is only one row in the decision.",
    "diagram": "DATA -> TERMS -> EXECUTION -> EXPORT\n |        |          |           |\nretain? train?   evidence?    restore?\n       SIGN NOTHING BY ASSUMPTION",
    "takeaways": [
      "Ask for exact model, plan and contract scope.",
      "Check rights and portability independently of encryption.",
      "Run an exit test before production depends on the vendor."
    ],
    "sections": [
      {
        "title": "The privacy questionnaire needs more than one checkbox",
        "paragraphs": [
          "Two vendors can both say they do not train on your data while differing on retention, subprocessors, infrastructure access and artifact export. A procurement decision that compresses those differences into one score creates a false sense of equivalence. Keep the rows separate so the actual tradeoff remains visible.",
          "Write down what will be uploaded, what will be generated and who needs access. Then identify the exact plan, model, region and contract that govern that workflow. A feature on an enterprise page is not automatically included in a self-serve subscription. A general policy can be supplemented by product-specific terms."
        ]
      },
      {
        "title": "Read data use, retention and licenses together",
        "paragraphs": [
          "ElevenLabs' model-improvement help describes prospective opt-out and a different Enterprise default. Its privacy policy addresses retention and deletion, while its general terms separately describe rights in Input and Output and licenses over Content and User Voice Models. Reading only the training setting misses the rest of the agreement.",
          "Ask what is logged, for how long, which party can access it, how deletion reaches backups and whether your selected plan has contractual exceptions. Do not translate no training into no storage or no human access unless the applicable terms actually support those claims. For regulated or commercially important material, have qualified reviewers check the agreement rather than relying on a blog's legal interpretation."
        ]
      },
      {
        "title": "Match security claims to the exact execution route",
        "paragraphs": [
          "NEAR's catalog distinguishes its own Confidential TEE models, third-party TEE routes and Incognito models that execute upstream outside TEEs. Its SDK documents optional E2EE for supported Chat paths, disabled by default. These details can change the answer to a questionnaire even when the billing provider is the same.",
          "Likewise, a local Ollama client can use either local or cloud-hosted models. Check the configured mode and the surrounding application. Require evidence proportionate to the threat model: current documentation and contracts for policy claims, supported client verification for confidential execution, and operational tests for the actual deployed path."
        ]
      },
      {
        "title": "Put migration and commercial use in the same review",
        "paragraphs": [
          "Ask whether you can export source data, outputs, configuration and custom artifacts in usable formats. ElevenLabs permits downloading some outputs but its help says standalone voice clones cannot be exported. An API key does not solve that dependency. For open-weight alternatives, inspect code and checkpoint licenses separately: F5-TTS, for example, documents MIT code but noncommercial pretrained weights.",
          "Before production, restore a small project without the original service account or identify exactly why that is impossible. Estimate the work to replace vendor-specific identifiers and compare output quality after recreation. Keep a license inventory, contract version and exit instructions. The best vendor is the one whose boundaries fit the project, not the one with the strongest privacy adjective. No price or purchase authorization is implied by this checklist."
        ]
      }
    ],
    "sources": [
      {
        "label": "ElevenLabs: model improvement and data-use controls",
        "url": "https://elevenlabs.io/docs/help-center/legal/is-my-data-used-to-improve-eleven-labs-ai-models"
      },
      {
        "label": "ElevenLabs Privacy Policy",
        "url": "https://elevenlabs.io/privacy-policy"
      },
      {
        "label": "ElevenLabs Terms of Use, sections 3-5 and 14",
        "url": "https://elevenlabs.io/terms-of-use"
      },
      {
        "label": "ElevenLabs: Can I export my voice clones?",
        "url": "https://elevenlabs.io/docs/help-center/product/voices/voice-cloning/can-i-export-my-voice-clones"
      },
      {
        "label": "NEAR AI Cloud: model privacy tiers",
        "url": "https://docs.near.ai/cloud/models"
      },
      {
        "label": "NEAR AI Cloud: inference SDK",
        "url": "https://docs.near.ai/cloud/inference-sdk"
      },
      {
        "label": "Ollama FAQ: local-only mode, network binding and data handling",
        "url": "https://docs.ollama.com/faq"
      },
      {
        "label": "F5-TTS official repository: code and weight licenses",
        "url": "https://github.com/swivid/F5-TTS/"
      }
    ]
  }
];
