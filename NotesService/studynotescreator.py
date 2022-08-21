import openai

openai.api_key = "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"


def create_study_notes(query,start):
    complete_query = query + " " + start
    response = openai.Completion.create(
    model="text-davinci-002",
    prompt= complete_query,
    temperature=0.4,
    max_tokens=1800,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0
    )
    
    return start + " " + response['choices'][0]['text']

